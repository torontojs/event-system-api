import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class AttendeeCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      _links: {
        self: {
          href: "/event/1/attendee",
          title: "Event attendees",
        },
        event: { href: "/event/1" },

        item: [
          {
            href: "/event/1/attendee/1",
          },
          {
            href: "/event/2/attendee/2",
          },
        ],
      },
      total: 5,
    };
  }
}

export default new AttendeeCollection();
