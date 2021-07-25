import { html } from "orison";

export default () => html`
  <footer class="site-footer">
    <div class="site-footer__wrapper">
      <div class="site-footer__start">
        <p class="footer-label">Follow Us</p>
        <a href="https://www.linkedin.com/company/aifuse-labs"
          ><ion-icon name="logo-linkedin"
        /></a>
      </div>
      <div class="site-footer__middle">
        <a href="https://aifuse.com/privacy-policy" class="privacy-policy">Privacy Policy</a>
        <p class="footer-label">
          Copyright &copy; 2021, Aifuse Research Labs Pvt. Ltd.
        </p>
      </div>
      <div class="site-footer__end"></div>
    </div>
  </footer>
`;
