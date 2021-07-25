import { html } from "orison";
import header from "../partials/header.js";
import footer from "../partials/footer.js";

export default (context) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="/styles/app.css" />
      <link rel="stylesheet" type="text/css" href="/styles/header.css" />
      <link rel="stylesheet" type="text/css" href="/styles/footer.css" />
      <title>${context.root.data.title}</title>
      <script src="/app.js"></script>
    </head>
    <body>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <div class="wrapper">
        ${header(context)}
        <main class="main">${context.page.html}</main>
        ${footer()}
      </div>
    </body>
  </html>
`;
