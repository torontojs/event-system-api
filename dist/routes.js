"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@curveball/router"));
const controller_1 = __importDefault(require("./home/controller"));
const collection_1 = __importDefault(require("./event/controller/collection"));
const routes = [router_1.default("/", controller_1.default), router_1.default("/event", collection_1.default)];
exports.default = routes;
//# sourceMappingURL=routes.js.map