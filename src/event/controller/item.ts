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
    return base("Events")
      .find("reccwJa2KqDrGo5Wn")
      .then((record: any) => {
        console.log("Retrieved", record.id);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/event" },
            "attendee-collection": {
              href: "/event/1/attendees/",
              title: "Event name attendee's",
            },
            "host-collection": {
              href: "/event/host",
              title: "Event name host",
            },
            "schedule-collection": "/event/schedule",
          },

          name: record.get("name"),
          start_date: record.get("start_time"),
          end_date: record.get("end_time"),
          type: record.get("type"),
          address: record.get("address"),
          description: record.get("description"),
        };
      });
  }
}
