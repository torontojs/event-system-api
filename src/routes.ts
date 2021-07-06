import router from "@curveball/router";
import homeController from "./home/controller";
import eventController from "./event/controller/collection";

export default [router("/", homeController), router("/event", eventController)];
