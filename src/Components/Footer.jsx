import { FooterIcons, FooterLinks } from "../data";

function Footer() {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {FooterLinks.map((FooterLink) => {
          const { id, href, text } = FooterLink;
          return (
            <li key={id}>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul class="footer-icons">
        {FooterIcons.map((FooterIcon) => {
          const { id, href, icon } = FooterIcon;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                class="footer-icon"
                rel="noreferrer"
              >
                <i class={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
