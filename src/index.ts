import app from "./app";

// eslint-disable-next-line @typescript-eslint/no-var-requires
console.log(
  "⚾ Curveball v%s",
  require("@curveball/core/package.json").version
);

// Authorization callback URL **important**
//http://localhost:8500/api/auth/github

// The HTTP port can be overridden via the 'PORT' environment variable.
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8500;
app.listen(port);

console.log("Listening on port %i", port);
