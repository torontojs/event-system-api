import router from "@curveball/router";
import homeController from "./home/controller";
import eventController from "./event/controller/collection";
import hostController from "./host/controller/collection";
import scheduleController from "./schedule/controller/collection";

export default [
  router("/", homeController),
  router("/event", eventController),
  router("/host", hostController),
  router("/schedule", scheduleController),
];
