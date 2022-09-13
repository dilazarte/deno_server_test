import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test App en Deno</title>
  </head>
  <body>
      <h1>Test de app en Deno</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor error amet! Unde blanditiis nihil minus aliquam ullam alias perferendis cumque sit suscipit tempore rerum saepe, ex ipsum. Corporis, obcaecati?</p>
  </body>
  </html>
  `
});

await app.listen({ port: 8080 });