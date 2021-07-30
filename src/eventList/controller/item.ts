import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class EventList extends Controller {
  async get(ctx: Context) {
    ctx.response.body = {
      _link: {
        self: { href: "http://localhost:8500/eventList" },
        "attendee-collection": "/eventList",
      },
      self: { href: "http://localhost:8500/eventList" },
      "eventList-collection": "/eventList",
      name: "Event name1",
      type: "online or in-person",
      address: "http:// or 123 Yonge Street, Unit 456",
      start_date: 1234567890,
      end_date: 1234567891,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ...",
    };
  }
}
