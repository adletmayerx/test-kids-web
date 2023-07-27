import cors from "cors";

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
const ALLOWED_CORS = ["http://localhost:3000", "https://localhost:3000"];

export default cors({
  credentials: true,
  origin(origin, callback) {
    if (!origin || ALLOWED_CORS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});