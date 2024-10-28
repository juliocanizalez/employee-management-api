export const corsOptions = {
  origin: "http://localhost:5173", // development purposes only
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Accept",
    "Origin",
    "X-Requested-With",
    "Content-Length",
    "Accept-Encoding",
    "Accept-Language",
    "Host",
    "Referer",
    "User-Agent",
  ],
  credentials: true,
  optionsSuccessStatus: 204,
  preflightContinue: false,
};
