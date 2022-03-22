import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Attendee extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    console.log(ctx.state.params.id);
    return base("Attendee")
      .find(ctx.state.params.id)
      .then((record: any) => {
        console.log("attendees", record);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/attendee" },
            "attendee-collection": {
              href: "/event/attendees",
              title: "Event name attendee's",
            },
          },
          eventAttendees: record.get("eventAttendees"),
          id: ctx.state.params.id
        };
      });
  }
}
