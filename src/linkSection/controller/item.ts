import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class LinkSection extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("Events")
      .find("recjig9jnOynZuEJz")
      .then((record: any) => {
        console.log("Retrieved", record.id);

        ctx.response.body = {
          _link: {
            self: { href: "http://localhost:8500/event" },
            "linkSection-collection": "/event/linkSection",
          },
          start_time: record.get("start_date"),
          end_time: record.get("end_date"),
          eventLink: record.get("link"),
        };
      });
  }
}
