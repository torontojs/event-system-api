import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Attendee extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
      var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
        "appzwXHVTy5YZFalo"
      );
      return base("Attendees")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view",
      })

      .eachPage((records: any, fetchNextPage: any) => {
        let list: any = [];
        //foreach building the items for the links.items array
        records.forEach((record: any) => {
          console.log('Retrieved', record.get('eventAttendees'))
          list.push({
            href: "http://localhost:8500/attendee/"+ record.id,
          });
        });
        console.log("a",list);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/attendee" },
            item: list,
          },
        };

        fetchNextPage();
      });
   
  }
}

