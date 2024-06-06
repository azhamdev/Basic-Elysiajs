import { Elysia, t } from "elysia"

export const appRouter = new Elysia()
  .get("/", () => "Hello Elysia")
  .onBeforeHandle(() => {
    console.log("onBeforeHandle Hook")
  })
  .onAfterHandle(() => {
    console.log("onAfterHandle Hook")
  })
  .get(
    "/users",
    () => {
      console.log("/users")
      return { message: "Users Data" }
    },
    {
      beforeHandle: () => {
        console.log("beforeHandle Local Hook")
      },
    }
  )
