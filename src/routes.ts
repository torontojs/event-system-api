import router from "@curveball/router";
import homeController from "./home/controller";
import EventCollection from "./event/controller/collection";
import HostCollection from "./host/controller/collection";
import ScheduleCollection from "./schedule/controller/collection";
import LinkSectionCollection from "./linkSection/controller/collection";
import hostController from "./host/controller/item";
import eventController from "./event/controller/item";
import scheduleController from "./schedule/controller/item";
import AttendeeCollection from "./attendee/controller/collection";
import attendeeController from "./attendee/controller/item";
import linkSectionController from "./linkSection/controller/item";


export default [
  router("/", homeController),
  router("/event", new EventCollection()),
  router("/event/:id", new eventController()),
  router("/schedule/:id", new scheduleController()),
  router("/schedule", new ScheduleCollection()),
  router("/attendee", new AttendeeCollection()),
  router("/attendee/:id", new attendeeController()),
  router("/host",new HostCollection()),
  router("/host/:id", new hostController()),
  router("/linkSection/:id", new linkSectionController()),
  router("/linkSection", new LinkSectionCollection()),
];
