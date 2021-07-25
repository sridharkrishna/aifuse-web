import { html } from "orison";
import nav from "./nav.js";

export default (context) => html`
  <header class="site-header">
    <div class="site-header__wrapper">
      <div class="site-header__start">
        <div class="brand"><a href="/"></a></div>
      </div>
      <div class="site-header__middle">${nav(context.path, context.root)}</div>
      <div class="site-header__end">
        <a class="button" href="#">Sign in</a>
      </div>
    </div>
  </header>
`;
