import router from "@curveball/router";
import homeController from "./home/controller";
import EventCollection from "./event/controller/collection";
import hostCollectionController from "./host/controller/collection";
import scheduleCollectionController from "./schedule/controller/collection";
import eventListCollectionController from "./eventList/controller/collection";

export default [
  router("/", homeController),
  router("/event", new EventCollection()),
  
  router("/host", hostCollectionController),
  router("/schedule", scheduleCollectionController),
  router("/eventList", eventListCollectionController),
];
