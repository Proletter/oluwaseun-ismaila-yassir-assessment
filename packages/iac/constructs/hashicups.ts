// constructs/hashicups.ts
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { HashicupProvider } from "../.gen/providers/hashicup/provider";
import { HashicupsOrder } from "../.gen/providers/hashicup/hashicups-order";
import { DataHashicupsCoffees } from "../.gen/providers/hashicup/data-hashicups-coffees";

// L3 Construct: High-level, business-focused API
export class CoffeeShop extends Construct {
  private readonly provider: HashicupProvider;
  private readonly coffees: DataHashicupsCoffees;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Initialize provider with sensible defaults
    this.provider = new HashicupProvider(this, "hashicups", {
      host: "http://localhost:19090",
      username: "admin",
      password: "admin",
    });

    // Get available coffees
    this.coffees = new DataHashicupsCoffees(this, "coffees", {
      provider: this.provider,
    });
  }

  // Business-focused methods
  public orderCoffee(coffeeId: number, quantity: number) {
    return new HashicupsOrder(this, `coffee-order-${Date.now()}`, {
      provider: this.provider,
      items: [
        {
          coffee: { id: coffeeId },
          quantity: quantity,
        },
      ],
    });
  }

  public orderMultipleCoffees(orders: { coffeeId: number; quantity: number }[]) {
    return new HashicupsOrder(this, `bulk-order-${Date.now()}`, {
      provider: this.provider,
      items: orders.map(order => ({
        coffee: { id: order.coffeeId },
        quantity: order.quantity,
      })),
    });
  }
}

// Main stack using the L3 construct
export class CoffeeShopStack extends TerraformStack {
  public readonly shop: CoffeeShop;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.shop = new CoffeeShop(this, "my-coffee-shop");
  }
}