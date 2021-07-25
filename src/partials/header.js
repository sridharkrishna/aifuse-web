import { html } from "orison";
import nav from "./nav.js";

export default (context) => html`
  <header class="site-header">
    <div class="site-header__wrapper">
      <div class="site-header__start">
        <a href="./"><div class="brand"></div></a>
      </div>
      <div class="site-header__middle">${nav(context.path, context.root)}</div>
      <div class="site-header__end">
        <a class="button" href="#">Sign in</a>
      </div>
    </div>
  </header>
`;
