//individual event resources
import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Event extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    return base("EventLink")
      .find("reccwJa2KqDrGo5Wn")
      .then((record: any) => {
        console.log("Retrieved", record.id);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/eventlink" },
            "attendee-collection": {
              href: "/eventlink/1/attendees/",
              title: "Event name attendee's",
            },
            "host-collection": {
              href: "/eventlink/host",
              title: "Event name host",
            },
            "schedule-collection": "/eventlink/schedule",
          },
          name: record.get("name"),
          start_time: record.get("start_time"),
          end_time: record.get("end_time"),
          type: record.get("type"),
          address: record.get("address"),
          description: record.get("description"),
          id: ctx.state.params.id,
          attendees: record.get("attendees"),
          schedule: record.get("schedule"),
          host: record.get("host"),
        };
      });
  }
}
