import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
export default class Host extends Controller {
    get(ctx: Context): Promise<any>;
}
