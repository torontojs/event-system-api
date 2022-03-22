import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Schedule extends Controller {
  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    // console.log(ctx.state.params.id);
    return base("Events")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view",
      })

      .eachPage((records: any, fetchNextPage: any) => {
        let list: any = [];
        //foreach building the items for the links.items array

        records.forEach((record: any) => {
          console.log('schedule', record.get('start'))
          list.push({
            href: "http://localhost:8500/schedule/"+ record.id,
          });
        });
        console.log("a",list);
        ctx.response.body = {
          _links: {
            self: { href:  "http://localhost:8500/schedule" },
            item: list,
          },
        };

        fetchNextPage();
      });
  }



  // get(ctx: Context) {
  //   ctx.response.type = "application/json";
  //   ctx.response.body = {
  //     _links: {
  //       self: {
  //         href: "/event/1/schedulles",
  //       },
  //       event: { href: "/event/1" },
  //       item: [
  //         {
  //           href: "/event/1/schedulle/1",
  //         },
  //         {
  //           href: "/event/2/schedulle/2",
  //         },
  //       ],
  //     },
  //     total: 2,
  //   };
  // }
}

//export default new Schedule();
