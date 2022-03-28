import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class LinkSection extends Controller {

  async get(ctx: Context) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base(
      "appzwXHVTy5YZFalo"
    );
    // console.log(ctx.state.params.id);
    return base("LinkSection")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view",
      })

      .eachPage((records: any, fetchNextPage: any) => {
        let list: any = [];
        //foreach building the items for the links.items array

        records.forEach((record: any) => {
          console.log('Retrieved', record.get("date"))
          list.push({
            href: "http://localhost:8500/LinkSection/"+ record.id,
          });
        });
        console.log("a",list);
        ctx.response.body = {
          _links: {
            self: { href: "http://localhost:8500/LinkSection" },
            item: list,
          },
        };

        fetchNextPage();
      });
  }
}


