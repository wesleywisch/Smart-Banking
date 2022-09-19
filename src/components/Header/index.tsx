import { SecondaryButton } from '../Buttons';
import { Navigation } from '../Navigation';

import ring1 from '../../assets/ring_orange.svg';
import message1 from '../../assets/message_pink.svg';
import message2 from '../../assets/message_blue.svg';
import phone from '../../assets/phone.svg';

import { HeaderContainer, HeaderContent, HeaderSection, LeftContent, RightContent } from './styles';

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
          <RightContent className="right-content">
            <img src={phone} alt="Phone" className='phone' />
            <img src={ring1} alt="Anel" className='ring1' />
            <img src={message1} alt="Mensagem" className='message1' />
            <img src={message2} alt="Mensagem" className='message2' />
          </RightContent>
        </HeaderSection>
      </HeaderContent>
    </HeaderContainer>
  )
}