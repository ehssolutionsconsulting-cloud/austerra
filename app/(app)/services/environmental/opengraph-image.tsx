import { serviceOG } from "../_og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return serviceOG("environmental");
}
