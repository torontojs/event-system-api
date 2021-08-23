import router from "@curveball/router";
import homeController from "./home/controller";
import EventCollection from "./event/controller/collection";
import hostCollectionController from "./host/controller/collection";
import scheduleCollectionController from "./schedule/controller/collection";
import eventListCollectionController from "./eventList/controller/collection";
import eventLinkCollectionController from "./eventLink/controller/collection";
import linkSectionCollectionController from "./linkSection/controller/collection";
import hostController from "./host/controller/item";
import eventController from "./event/controller/item";
import scheduleController from "./schedule/controller/item";
import attendeeController from "./attendee/controller/item";
import eventListController from "./eventList/controller/item";
import eventLinkController from "./eventLink/controller/item";
import linkSectionController from "./linkSection/controller/item";

export default [
  router("/", homeController),
  router("/event", new EventCollection()),
  router("/event/:id", new eventController()),
  router("/schedule/:id", new scheduleController()),
  router("/schedule", scheduleCollectionController),
  router("/attendee/:id", new attendeeController()),
  router("/host", hostCollectionController),
  router("/host/:id", new hostController()),
  router("/linkSection/:id", new linkSectionController()),
  router("/linkSection", linkSectionCollectionController),
  router("/eventList", new eventListController()),
  router("/eventList", eventListCollectionController),
  router("/eventLink", new eventLinkController()),
  router("/eventLink", new eventLinkCollectionController()),
];
