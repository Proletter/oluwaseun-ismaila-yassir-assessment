import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { HashicupProvider } from "./.gen/providers/hashicup/provider";
import { HashicupsOrder } from "./.gen/providers/hashicup/hashicups-order";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Define HashiCups provider
    new HashicupProvider(this, "hashicup", {
      host: "http://localhost:19090",
      username: "admin",
      password: "admin",
    });

    // Create an order
    new HashicupsOrder(this, "morning_order", {
      items: [
        {
          coffee: { id: 1 },
          quantity: 2,
        },
      ],
    });

    new HashicupsOrder(this, "afternoon_order", {
      items: [
        {
          coffee: { id: 2},
          quantity: 5,
        },
      ],
    });

    new HashicupsOrder(this, "evening_order", {
      items: [
        {
          coffee: { id: 3 },
          quantity: 6,
        },
      ],
    });
  }
}

const app = new App();
new MyStack(app, "orders");
app.synth();