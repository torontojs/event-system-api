"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
//import { get } from "http";
class Schedule extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        return base("Events")
            .select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 5,
            view: "Grid view",
        })
            .eachPage((records, fetchNextPage) => {
            let list = [];
            //foreach building the items for the links.items array
            records.forEach((record) => {
                list.push({
                    href: "http://localhost:8500/schedule/",
                });
            });
            console.log("a", list);
            ctx.response.body = {
                _links: {
                    self: { href: "http://localhost:8500/schedule" },
                    item: list,
                },
            };
            fetchNextPage();
        });
        // get(ctx: Context) {
        //   ctx.response.type = "application/json";
        //   ctx.response.body = {
        //     _links: {
        //       self: {
        //         href: "/event/1/schedules",
        //       },
        //       event: { href: "/event/1" },
        //       item: [
        //         {
        //           href: "/event/1/schedule/1",
        //         },
        //         {
        //           href: "/event/2/schedule/2",
        //         },
        //       ],
        //     },
        //     total: 5,
        //   };
        // }
    }
}
exports.default = Schedule;
// export default new ScheduleCollection ();
//# sourceMappingURL=collection.js.map