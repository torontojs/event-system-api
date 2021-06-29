"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("@curveball/controller"));
class HomeController extends controller_1.default {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello World!",
    };
  }
}
exports.default = new HomeController();
//# sourceMappingURL=controller.js.map
