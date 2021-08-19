"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//individual event resources
const controller_1 = __importDefault(require("@curveball/controller"));
class Event extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        return base("Events")
            .find(ctx.params.id)
            .then((record) => {
            console.log("Retrieved", record.id);
            ctx.response.body = {
                _links: {
                    self: { href: "http://localhost:8500/event" },
                    "attendee-collection": {
                        href: "/event/1/attendees/",
                        title: "Event name attendee's",
                    },
                    "host-collection": {
                        href: "/event/host",
                        title: "Event name host",
                    },
                    "schedule-collection": "/event/schedule",
                },
                name: record.get("name"),
                type: "",
                address: "",
                start_date: 1234567890,
                end_date: 1234567891,
                description: "",
            };
        });
    }
}
exports.default = Event;
//# sourceMappingURL=item.js.map