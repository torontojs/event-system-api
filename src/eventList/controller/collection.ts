import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class EventlistCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello Event list!",
    };
  }
}

export default new EventlistCollection();
