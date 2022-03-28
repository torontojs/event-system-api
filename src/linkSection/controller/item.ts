import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class LinkSection extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("LinkSection")
      .find("recjig9jnOynZuEJz")
      .then((record: any) => {
        console.log("Retrieved", record);

        ctx.response.body = {
          _link: {
            self: { href: "http://localhost:8500/linkSection" },
            "linkSection-collection": "/event/linkSection",
          },
          date: record.get("date"),
          info: record.get("info"),
          eventLink: record.get("eventLink"),
          id: ctx.state.params.id,
        };
      });
  }
}
