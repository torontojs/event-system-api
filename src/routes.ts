import router from "@curveball/router";
import homeController from "./home/controller";
import EventCollection from "./event/controller/collection";
import HostCollection from "./host/controller/collection";
import ScheduleCollection from "./schedule/controller/collection";
// import eventListCollectionController from "./eventList/controller/collection";
import eventLinkCollection from "./eventLink/controller/collection";
import LinkSectionCollection from "./linkSection/controller/collection";
import hostController from "./host/controller/item";
import eventController from "./event/controller/item";
import scheduleController from "./schedule/controller/item";
import attendeeController from "./attendee/controller/item";
// import eventListController from "./eventList/controller/item";
import eventLinkController from "./eventLink/controller/item";
import linkSectionController from "./linkSection/controller/item";
// import ScheduleCollection from "./schedule/controller/collection";

export default [
  router("/", homeController),
  router("/event", new EventCollection()),
  router("/event/:id", new eventController()),
  router("/schedule/:id", new scheduleController()),
  router("/schedule", new ScheduleCollection()),
  router("/attendee/:id", new attendeeController()),
  router("/host",new HostCollection()),
  router("/host/:id", new hostController()),
  router("/linkSection/:id", new linkSectionController()),
  router("/linkSection", new LinkSectionCollection()),
  // router("/eventList", new eventListController()),
  // router("/eventList", eventListCollectionController),
  router("/eventLink", new eventLinkCollection()),
  router("/eventLink/:id", new eventLinkController()),
];
