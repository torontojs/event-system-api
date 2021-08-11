import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Host extends Controller {
  async get(ctx: Context) {
    ctx.response.body = {
      _link: {
        self: { href: "http://localhost:8500/event" },
        "host-collection": "/event/host",
      },
      host_name: "Sponge Bob",
      host_picture: "",
    };
  }
}
