//individual event resources
import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Event extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );

    return base("Events")
      .find(ctx.params.id)
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
          type: "",
          address: "",
          start_date: 1234567890,
          end_date: 1234567891,
          description: "",
        };
      });
  }
}
