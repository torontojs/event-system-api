//individual event resources
import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

export default class Event extends Controller {
  async get(ctx: Context) {
    ctx.response.body = {
      _links: {
        self: { href: "http://localhost:8500/eventlink" },
        "attendee-collection": {
          href: "/eventlink/1/attendees/",
          title: "Event name attendee's",
        },
        "host-collection": {
          href: "/eventlink/host",
          title: "Event name host",
        },
        "schedule-collection": "/eventlink/schedule",
      },

      name: "Event name1",
      type: "online or in-person",
      address: "http:// or 123 Yonge Street, Unit 456",
      start_date: 1234567890,
      end_date: 1234567891,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the",
      schedule: "6:30 - doors open, chit chat",
      host_name: "Elon Musk",
      host_picture: "https://www.google.com/imgage1",
    };
  }
}
