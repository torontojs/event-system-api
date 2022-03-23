import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Host extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("Host")
      .find(ctx.state.params.id)
      .then((record: any) => {
        console.log("Retrieved", record);

        ctx.response.body = {
          _link: {
            self: { href: "http://localhost:8500/event" },
            "host-collection": "/event/host",
          },
          host_name: record.get("host_name"),
          host_picture: record.get("host_picture"),
        };
      });
  }
}
