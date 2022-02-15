"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class EventLinkCollection extends controller_1.default {
    get(ctx) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            _links: {
                self: {
                    href: "/eventlink",
                },
                item: [
                    {
                        href: "/eventlink/1",
                        title: "Event name",
                    },
                    {
                        href: "/eventlink/2",
                        title: "Event name",
                    },
                ],
            },
            total: 5,
        };
    }
}
exports.default = EventLinkCollection;
//set of links to the actual event resource
//# sourceMappingURL=collection.js.map