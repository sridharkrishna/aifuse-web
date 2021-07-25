import { html } from "orison";

export default () => html`
  <footer class="site-footer">
    <div class="site-footer__wrapper">
      <div class="site-footer__start">
        <p class="footer-label">Follow Us</p>
        <a class="follow-us" href="https://www.linkedin.com/company/aifuse-labs"
          ><ion-icon name="logo-linkedin"
        /></a>
        <a class="follow-us" href="https://twitter.com/aifuse">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </div>
      <div class="site-footer__start">
        <p class="footer-label">Contact Us</p>
        <a class="follow-us" href="mailto:info@aifuse.com">
          <ion-icon name="mail"></ion-icon> 
        </a>
      </div>
      <div class="site-footer__middle">
      </div>
      <div class="site-footer__end">
        <a href="./privacy-policy" class="privacy-policy"
          >Privacy Policy</a
        >
        <p class="footer-label">
          Copyright &copy; 2021 - Aifuse Research Labs Pvt. Ltd.
        </p>
      </div>
    </div>
  </footer>
`;
