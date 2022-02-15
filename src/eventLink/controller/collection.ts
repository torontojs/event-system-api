import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class EventLinkCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      _links: {
        self: {
          href: "/eventlink",
        },

        item: [
          {
            href: "/eventlink/1",
            title: "Event name",
          },

          {
            href: "/eventlink/2",
            title: "Event name",
          },
        ],
      },

      total: 5,
    };
  }
}

export default EventLinkCollection;

//set of links to the actual event resource
