"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class EventlistCollection extends controller_1.default {
    get(ctx) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            title: "Hello Event list!",
        };
    }
}
exports.default = new EventlistCollection();
//# sourceMappingURL=collection.js.map