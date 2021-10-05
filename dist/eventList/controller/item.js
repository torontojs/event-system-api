"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class EventList extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        // console.log(ctx.state.params.id);
        return base("Events")
            .select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 3,
            view: "Grid view",
        })
            .eachPage((records, fetchNextPage) => {
            let list = [];
            //foreach building the items for the links.items array
            records.forEach((record) => {
                list.push({
                    href: "http://localhost:8500/event/" + record.get("event_id"),
                });
            });
            ctx.response.body = {
                _links: {
                    self: { href: "http://localhost:8500/eventlist" },
                    items: list,
                },
            };
            fetchNextPage();
        });
    }
}
exports.default = EventList;
//# sourceMappingURL=item.js.map