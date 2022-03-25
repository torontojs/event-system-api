//individual event resources
import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Event extends Controller {
  async get(ctx: Context) {
    // integration with airtable
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );

    // promise table.select().firstPage().then(result => { ... })
    console.log(ctx.state.params.id);
    return base("Events")
      .find(ctx.state.params.id)
      .then((record: any) => {
        console.log("Retrieved", record);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/event" },
            "attendee-collection": {
              href: "/event/attendees",
              title: "Event name attendee's",
            },
            "host-collection": {
              href: "/event/host",
              title: "Event name host",
            },
            "schedule-collection": {
              href: "/event/schedule",
              title: "Event schedule",
            }

          },
          name: record.get("name"),
          start_time: record.get("start_time"),
          end_time: record.get("end_time"),
          type: record.get("type"),
          address: record.get("address"),
          description: record.get("description"),
          id: ctx.state.params.id,
          attendees: record.get("attendees"),
        };
      });
  }
}
