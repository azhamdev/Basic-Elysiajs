import { Elysia } from "elysia"
import { appRouter } from "./routes/appRouter"
import { html } from "@elysiajs/html"

const app = new Elysia({ prefix: "/api/v1" })
  // plugins
  .use(html())
  // routes
  .use(appRouter)
  // port
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
