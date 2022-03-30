"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class Host extends controller_1.default {
    async get(ctx) {
        var Airtable = require("airtable");
        var base = new Airtable({ apiKey: "key1BPt0W7VMSQko5" }).base("appzwXHVTy5YZFalo");
        return base("Host")
            .find(ctx.state.params.id)
            .then((record) => {
            console.log("Retrieved", record.get("host_picture"));
            ctx.response.body = {
                _link: {
                    self: { href: "http://localhost:8500/event" },
                    "host-collection": "/event/host",
                },
                host_name: record.get("host_name"),
                host_picture: record.get("host_picture")[0].url,
                id: ctx.state.params.id
            };
        });
    }
}
exports.default = Host;
//# sourceMappingURL=item.js.map