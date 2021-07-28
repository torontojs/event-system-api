"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class HostCollection extends controller_1.default {
    get(ctx) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            _links: {
                self: {
                    href: "/event/1/hosts",
                    title: "Event name host"
                },
                event: { "href": "/event/1" },
                item: [
                    {
                        href: "/event/1/host/1"
                    },
                    {
                        href: "/event/2/host/2"
                    }
                ]
            },
            "total": 3
        };
    }
}
exports.default = new HostCollection();
//# sourceMappingURL=collection.js.map