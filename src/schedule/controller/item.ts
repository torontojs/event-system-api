import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Schedule extends Controller {
  async get(ctx: Context) {
    ctx.response.body = {
      _link: {
        self: { href: "http://localhost:8500/event" },
        "schedule-collection": "/event/schedule",
      },
      start: "Start: 6:30pm.",
      codeAlong: "Code Along: 7:00pm.",
      questionA: "Q & A: 8:30pm.",
      end: "End: 9:00pm.",
    };
  }
}
