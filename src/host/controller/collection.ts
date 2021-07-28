import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class HostCollection extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      _links: {
        self: {
          href: "/event/1/hosts",
          title: "Event name host"
        },
    event: { "href": "/event/1" },

    item: [
        { 
            href: "/event/1/host/1" 
        },
        { 
            href: "/event/2/host/2"
        }
    ]
},
"total": 3
    };
  }
}

export default new HostCollection();
