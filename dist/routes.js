"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@curveball/router"));
const controller_1 = __importDefault(require("./home/controller"));
const collection_1 = __importDefault(require("./event/controller/collection"));
const collection_2 = __importDefault(require("./host/controller/collection"));
const collection_3 = __importDefault(require("./schedule/controller/collection"));
const collection_4 = __importDefault(require("./eventList/controller/collection"));
const item_1 = __importDefault(require("./host/controller/item"));
const item_2 = __importDefault(require("./event/controller/item"));
const item_3 = __importDefault(require("./schedule/controller/item"));
const item_4 = __importDefault(require("./attendee/controller/item"));
const item_5 = __importDefault(require("./eventList/controller/item"));
exports.default = [
    router_1.default("/", controller_1.default),
    router_1.default("/event", new collection_1.default()),
    router_1.default("/event/:id", new item_2.default()),
    router_1.default("/schedule/:id", new item_3.default()),
    router_1.default("/attendee/:id", new item_4.default()),
    router_1.default("/host/:id", new item_1.default()),
    router_1.default("/eventList", new item_5.default()),
    router_1.default("/host", collection_2.default),
    router_1.default("/schedule", collection_3.default),
    router_1.default("/eventList", collection_4.default),
];
//# sourceMappingURL=routes.js.map