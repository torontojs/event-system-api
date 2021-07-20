import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class EventCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      _links: {
        self: {
          href: "/event/",
        },

        item: [
          {
            href: "/event/1",
            title: "Event name",
          },

          {
            href: "/event/2",
            title: "Event name",
          },
        ],
      },

      total: 3,
    };
  }
}

export default new EventCollection();

//set of links to the actual event resource
