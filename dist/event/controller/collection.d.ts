import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
declare class EventCollection extends Controller {
    options(ctx: Context): void;
    get(ctx: Context): void;
}
export default EventCollection;
