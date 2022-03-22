import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Schedule extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    console.log(ctx.state.params.id);
    return base("Schedules")
      .find(ctx.state.params.id)
      .then((record: any) => {
        console.log("schedule", record);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/schedule" },
            "schedule-collection": {
              href: "/event/schedule",
              title: "Event schedule",
            }

          },
          start: record.get("start"),
          activity: record.get("activity"),
          closing: record.get("closing"),
          end: record.get("end"),
          id: ctx.state.params.id
        };
      });
  }
}
