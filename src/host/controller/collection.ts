import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class HostCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello host!",
    };
  }
}

export default new HostCollection();
