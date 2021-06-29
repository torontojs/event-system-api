"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@curveball/router"));
const controller_1 = __importDefault(require("./home/controller"));
exports.default = [router_1.default("/", controller_1.default)];
//# sourceMappingURL=routes.js.map