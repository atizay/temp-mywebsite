import { Link } from "react-router-dom";

import './SocialLinks.css';

function SocialLinks() {
  return (
    <ul className="socials-list">
      <li className="socials-list__item">
        <Link to="https://vk.com/osipov.bear" className="socials-list__link" target="_blank">
          <span className="socials-list__icon socials-list__icon_vk"></span>
          <span className="socials-list__address-link">vk.com/osipov.bear</span>
        </Link>
      </li>
      <li className="socials-list__item">
        <Link to="https://github.com/atizay" className="socials-list__link" target="_blank">
          <span className="socials-list__icon socials-list__icon_git"></span>
          <span className="socials-list__address-link">github.com/atizay</span>
        </Link>
      </li>
      <li className="socials-list__item">
        <a href="tg://resolve?domain=osipov_bear" className="socials-list__link" target="_blank">
          <span className="socials-list__icon socials-list__icon_tg"></span>
          <span className="socials-list__address-link">@osipov_bear</span>
        </a>
      </li>
      <li className="socials-list__item">
        <a href="https://www.linkedin.com/in/atizay/" className="socials-list__link" target="_blank">
          <span className="socials-list__icon socials-list__icon_in"></span>
          <span className="socials-list__address-link">linkedin.com/in/atizay</span>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
