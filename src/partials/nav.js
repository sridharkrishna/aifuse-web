import { html } from "orison";

export default (currentPath, root) => html`
  <nav class="nav">
    <ul class="nav__wrapper">
      <button class="nav__toggle" aria-expanded="false" type="button">
        menu
      </button>
      <li class="nav__item">
        <a href="/" class="${currentPath.length === 1 ? "active" : ""}"
          >Begin</a
        >
      </li>
      ${root.children.map(
        (child) => html`
          <li class="nav__item">
            <a
              href="${child.path}"
              class="${currentPath.startsWith(child.path) ? "active" : ""}"
              >${child.data.title}</a
            >
          </li>
        `
      )}
    </ul>
  </nav>
`;
