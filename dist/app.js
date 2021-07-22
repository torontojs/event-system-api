"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@curveball/core");
const accesslog_1 = __importDefault(require("@curveball/accesslog"));
const problem_1 = __importDefault(require("@curveball/problem"));
const bodyparser_1 = __importDefault(require("@curveball/bodyparser"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("@curveball/cors"));
const app = new core_1.Application();
// The accesslog middleware shows all requests and responses on the cli.
app.use(accesslog_1.default());
// The problem middleware turns exceptions into application/problem+json error
// responses.
app.use(problem_1.default());
// The bodyparser middleware is responsible for parsing JSON and url-encoded
// request bodies, and populate ctx.request.body.
app.use(bodyparser_1.default());
app.use(cors_1.default());
app.use(...routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map