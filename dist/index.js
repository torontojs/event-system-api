"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
console.log("⚾ Curveball v%s", require("@curveball/core/package.json").version);
// The HTTP port can be overridden via the 'PORT' environment variable.
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8500;
app_1.default.listen(port);
console.log("Listening on port %i", port);
//# sourceMappingURL=index.js.map