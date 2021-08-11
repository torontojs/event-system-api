"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Host extends controller_1.default {
    async get(ctx) {
        ctx.response.body = {
            _link: {
                self: { href: "http://localhost:8500/event" },
                "host-collection": "/event/host",
            },
            host_name: "Sponge Bob",
            host_picture: "",
        };
    }
}
exports.default = Host;
//# sourceMappingURL=item.js.map