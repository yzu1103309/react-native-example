import ky from "ky";
import { apiPrefix } from "@/constants";

const client = ky.extend({
    prefixUrl: apiPrefix,
    headers: {
      'X-No-CSRF': '1',
    },
    credentials: 'include',
});

export default client