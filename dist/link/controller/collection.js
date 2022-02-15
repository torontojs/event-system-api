"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class LinkCollection extends controller_1.default {
    get(ctx) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            _links: {
                self: {
                    href: "/event/1/link",
                    title: "Event link",
                },
                event: { href: "/event/1" },
                item: [
                    {
                        href: "/event/1/link/1",
                    },
                    {
                        href: "/event/2/link/2",
                    },
                ],
            },
            total: 5,
        };
    }
}
exports.default = new LinkCollection();
//# sourceMappingURL=collection.js.map