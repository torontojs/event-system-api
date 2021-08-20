import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Attendee extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("Events")
      .find("rec4RsKkO3Ammh5qE")
      .then((record: any) => {
        console.log("Retrieved", record.id);
        ctx.response.body = {
          _link: {
            self: { href: "http://localhost:8500/event" },
            "attendee-collection": "/event/attendee",
          },
          eventAttendees: record.get("eventAttendees"),
        };
      });
  }
}
