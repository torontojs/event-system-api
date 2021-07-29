"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Attendee extends controller_1.default {
    async get(ctx) {
        ctx.response.body = {
            _link: {
                self: { href: "http://localhost:8500/event" },
                "attendee-collection": "/event/attendee",
            },
            //   full_name: "Sponge Bob",
            //   email: "SpongeBob@gmail.com",
            eventAttendees: "60 people attending.",
        };
    }
}
exports.default = Attendee;
//# sourceMappingURL=item.js.map