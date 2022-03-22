"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Attendee extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        console.log(ctx.state.params.id);
        return base("Attendee")
            .find(ctx.state.params.id)
            .then((record) => {
            console.log("attendees", record);
            ctx.response.body = {
                _links: {
                    self: { href: "http://localhost:8500/attendee" },
                    "attendee-collection": {
                        href: "/event/attendees",
                        title: "Event name attendee's",
                    },
                },
                eventAttendees: record.get("eventAttendees"),
                id: ctx.state.params.id
            };
        });
    }
}
exports.default = Attendee;
//# sourceMappingURL=item.js.map