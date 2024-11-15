import "cdktf/lib/testing/adapters/jest";
import { Testing } from "cdktf";
// import { App, Testing as CDKTFTesting } from "cdktf";
import { MyStack } from "../main";

describe("My CDKTF Application", () => {
  // Validate synthesis
  it("should synthesize successfully", () => {
    const app = Testing.app();
    const stack = new MyStack(app, "test");
    
    const fullSynth = Testing.fullSynth(stack);
    expect(fullSynth).toBeDefined();
  });

  // Test hashicups provider existence
  it("should include hashicups provider", () => {
    const app = Testing.app();
    const stack = new MyStack(app, "test");
    
    const synthStack = Testing.synth(stack);
    expect(synthStack).toContain("hashicup");
  });

  // Test order creation
  it("should create an order resource", () => {
    const app = Testing.app();
    const stack = new MyStack(app, "test");
    
    const synthStack = Testing.synth(stack);
    expect(synthStack).toContain("hashicups_order");
  });
});