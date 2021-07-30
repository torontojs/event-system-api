"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class EventList extends controller_1.default {
    async get(ctx) {
        ctx.response.body = {
            _link: {
                self: { href: "http://localhost:8500/eventList" },
                "attendee-collection": "/eventList",
            },
            self: { href: "http://localhost:8500/eventList" },
            "eventList-collection": "/eventList",
            name: "Event name1",
            type: "online or in-person",
            address: "http:// or 123 Yonge Street, Unit 456",
            start_date: 1234567890,
            end_date: 1234567891,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ...",
        };
    }
}
exports.default = EventList;
//# sourceMappingURL=item.js.map