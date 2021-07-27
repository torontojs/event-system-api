"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//individual event resources
const controller_1 = __importDefault(require("@curveball/controller"));
class Event extends controller_1.default {
    async get(ctx) {
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
            name: "Event name",
            type: "'online' || 'in-person'",
            address: "'http://' || '123 Yonge Street, Unit 456'",
            start_datetime: 1234567890,
            end_datetime: 1234567891,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the",
            schedule: "6:30 - doors open, chit chat",
            host_name: "Elon Musk",
            host_picture: "https://www.google.com/imgage1",
        };
        console.log("hello");
    }
}
exports.default = Event;
//# sourceMappingURL=item.js.map