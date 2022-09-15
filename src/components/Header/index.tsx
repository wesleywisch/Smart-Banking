import { SecondaryButton } from '../Buttons';
import { Navigation } from '../Navigation';

import phone from '../../assets/phone.svg';

import { HeaderContainer, HeaderContent, HeaderSection, LeftContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Navigation />

        <HeaderSection>
          <LeftContent>
            <div className="left-text-container">
              <h1>Smart banking for freelancers</h1>

              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque delectus saepe rerum! Adipisci aspernatur facilis ad, debitis incidunt consectetur ex similique asperiores eveniet rem ab voluptatem cupiditate odit hic!
              </p>

              <SecondaryButton title='Register now' />
            </div>
          </LeftContent>
          <div className="right-content">
            <img src={phone} alt="Phone" />
          </div>
        </HeaderSection>
      </HeaderContent>
    </HeaderContainer>
  )
}