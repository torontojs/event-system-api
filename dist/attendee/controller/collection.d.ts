import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
declare class AttendeeCollection extends Controller {
    get(ctx: Context): Promise<void>;
}
declare const _default: AttendeeCollection;
export default _default;
