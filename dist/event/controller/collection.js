"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class EventCollection extends controller_1.default {
    options(ctx) {
        console.log("hey");
    }
    get(ctx) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            _links: {
                self: {
                    href: "/event/",
                },
                item: [
                    {
                        href: "/event/1",
                        title: "Event name",
                    },
                    {
                        href: "/event/2",
                        title: "Event name",
                    },
                ],
            },
            total: 3,
        };
    }
}
exports.default = EventCollection;
//set of links to the actual event resource
//# sourceMappingURL=collection.js.map