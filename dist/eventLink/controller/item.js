"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//individual event resources
const controller_1 = __importDefault(require("@curveball/controller"));
class EventLink extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        return base("Events")
            .find(ctx.state.params.id)
            .then((record) => {
            console.log("Retrieved", record.id);
            console.log(ctx.state.params.id, "link");
            ctx.response.body = {
                _links: {
                    self: { href: "http://localhost:8500/eventLink" },
                    "attendee-collection": {
                        href: "/eventLink/attendees/",
                        title: "Event name attendee's",
                    },
                    "host-collection": {
                        href: "/eventLink/host",
                        title: "Event name host",
                    },
                    "schedule-collection": "/eventLink/schedule",
                    href: "/eventLink/schedule",
                    title: "Event schedule",
                },
                name: record.get("name"),
                start_time: record.get("start_time"),
                end_time: record.get("end_time"),
                type: record.get("type"),
                address: record.get("address"),
                description: record.get("description"),
                id: ctx.state.params.id,
                attendees: record.get("attendees"),
                schedule: record.get("schedule"),
                host: record.get("host"),
            };
        });
    }
}
exports.default = EventLink;
//# sourceMappingURL=item.js.map