import router from "@curveball/router";
import homeController from "./home/controller";
import EventCollection from "./event/controller/collection";
import hostCollectionController from "./host/controller/collection";
import scheduleCollectionController from "./schedule/controller/collection";
import eventListCollectionController from "./eventList/controller/collection";
import eventController from "./event/controller/item";
import scheduleController from "./schedule/controller/item";

export default [
  router("/", homeController),
  router("/event", new EventCollection()),
  router("/event/:id", new eventController()),
  router("/schedule/:id", new scheduleController()),
  router("/host", hostCollectionController),
  router("/schedule", scheduleCollectionController),
  router("/eventList", eventListCollectionController),
];
