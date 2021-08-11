import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Attendee extends Controller {
  async get(ctx: Context) {
    ctx.response.body = {
      _link: {
        self: { href: "http://localhost:8500/event" },
        "attendee-collection": "/event/attendee",
      },
      eventAttendees: "60 people attending.",
    };
  }
}
