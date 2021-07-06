import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class ScheduleCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello Schedule!",
    };
  }
}

export default new ScheduleCollection();
