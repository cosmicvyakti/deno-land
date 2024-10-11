import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { Middleware } from "@oak/oak/middleware";
import { Context } from "@oak/oak/context";







const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
}).get("/cats/:word", (ctx) => {
    const word = ctx.params.word;
    ctx.response.status = 200;
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = {
        message: `Hello World! ${word}`
    }
});

const app = new Application();




app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 5001 });
console.log("URL: localhost:5001")