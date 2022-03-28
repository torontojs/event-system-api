"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class LinkSection extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        // console.log(ctx.state.params.id);
        return base("LinkSection")
            .select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 5,
            view: "Grid view",
        })
            .eachPage((records, fetchNextPage) => {
            let list = [];
            //foreach building the items for the links.items array
            records.forEach((record) => {
                console.log('Retrieved', record.get("date"));
                list.push({
                    href: "http://localhost:8500/LinkSection/" + record.id,
                });
            });
            console.log("a", list);
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
exports.default = LinkSection;
//# sourceMappingURL=collection.js.map