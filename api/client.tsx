import ky from "ky";
import { apiPrefix } from "@/constants";

const client = ky.extend({
    prefixUrl: "http://140.138.150.20/G0_api/",
    headers: {
      'X-No-CSRF': '1',
    },
    credentials: 'include',
});

export default client