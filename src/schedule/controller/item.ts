import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Schedule extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("Events")
      .find(ctx.state.params.id)
      .then((record: any) => {
        console.log("Retrieved", record.id);
        ctx.response.body = {
          _link: {
            self: { href: "http://localhost:8500/schedule" },
            "schedule-collection": "/event/schedule",
          },
          start: record.get("start"),
          activity: record.get("activity"),
          closing: record.get("closing"),
          end: record.get("end"),
        };
      });
  }
}
