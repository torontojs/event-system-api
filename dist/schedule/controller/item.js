"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Schedule extends controller_1.default {
    async get(ctx) {
        ctx.response.body = {
            _link: {
                self: { href: "http://localhost:8500/event" },
                "schedule-collection": "/event/schedule",
            },
            start: "Start: 6:30pm.",
            codeAlong: "Code Along: 7:00pm.",
            questionA: "Q & A: 8:30pm.",
            end: "End: 9:00pm.",
        };
    }
}
exports.default = Schedule;
//# sourceMappingURL=item.js.map