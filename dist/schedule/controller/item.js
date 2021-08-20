"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Schedule extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        return base("Events")
            .find("recdhczylXmFkomdh")
            .then((record) => {
            console.log("Retrieved", record.id);
            ctx.response.body = {
                _link: {
                    self: { href: "http://localhost:8500/event" },
                    "schedule-collection": "/event/schedule",
                },
                start: record.get("start"),
                activity: record.get("activity"),
                closing: record.get("closing"),
                end: record.get("end"),
            };
        });
    }
}
exports.default = Schedule;
//# sourceMappingURL=item.js.map