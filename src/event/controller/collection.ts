import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class EventCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello people!",
    };
  }
}

export default new EventCollection();

//set of links to the actual event resource
