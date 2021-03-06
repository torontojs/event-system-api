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
        return base("LinkSection")
            .find(ctx.state.params.id)
            .then((record) => {
            console.log("link", record.get("eventLink"));
            ctx.response.body = {
                _link: {
                    self: { href: "http://localhost:8500/linkSection" },
                    "linkSection-collection": "/event/linkSection",
                },
                date: record.get("date"),
                info: record.get("info"),
                eventLink: record.get("eventLink"),
                id: ctx.state.params.id,
            };
        });
    }
}
exports.default = LinkSection;
//# sourceMappingURL=item.js.map