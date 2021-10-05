import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class LinkSectionCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      _links: {
        self: {
          href: "/event/1/linkSection",
          title: "Event linkSection",
        },
        event: { href: "/event/1" },

        item: [
          {
            href: "/event/1/linkSection/1",
          },
          {
            href: "/event/2/linkSection/2",
          },
        ],
      },
      total: 3,
    };
  }
}

export default new LinkSectionCollection();