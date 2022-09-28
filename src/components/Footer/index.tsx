import logoImg from '../../assets/logo.svg';

import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <div className="footer-con">
        <div className="logo-con">
          <div className="logo-items">
            <img src={logoImg} alt="Logo" />

            <p>
              Copyright @2022 loremIpsum. <br />
              All rights reserved.
            </p>
          </div>
        </div>

        <ul className="button-nav">
          <div className="links1">
            <li>
              <a href="/">Team</a>
            </li>

            <li>
              <a href="/">Press</a>
            </li>

            <li>
              <a href="/">Fees</a>
            </li>
          </div>

          <div className="links2">
            <li>
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Projects</a>
            </li>

            <li>
              <a href="/">Affiliate</a>
            </li>
          </div>

          <div className="links3">
            <li>
              <a href="/">Terms of use</a>
            </li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>

            <li>
              <a href="/">Contact us</a>
            </li>
          </div>
        </ul>
      </div>
    </FooterContainer>
  )
}