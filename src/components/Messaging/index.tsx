import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import avatar4 from '../../assets/avatar4.svg';
import avatar5 from '../../assets/avatar5.svg';
import messaging from '../../assets/conversation.svg';
import bgCircles from '../../assets/circleBg.svg';

import { MessagingContainer } from './styles';

export function Messaging() {
  return (
    <MessagingContainer>
      <div className="message-con">
        <div className="left-items">
          <h2 className="secondary-heading">
            We support you in 5 different languages
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex mollitia, nemo laborum unde temporibus enim ratione excepturi debitis, nihil ducimus odit deserunt?
          </p>

          <div className="images-con">
            <img src={avatar1} alt="Avatar 1" className="image-1" />
            <img src={avatar2} alt="Avatar 2" className="image-2" />
            <img src={avatar3} alt="Avatar 3" className="image-3" />
            <img src={avatar4} alt="Avatar 4" className="image-4" />
            <img src={avatar5} alt="Avatar 5" className="image-5" />

            <p>&nbsp; +25</p>
          </div>

          <img src={bgCircles} className='bgCircle' alt="Pontilhado" />
        </div>
        <div className="right-items">
          <img src={messaging} alt="Mensagem" />
          <img src={bgCircles} alt="Pontilhado" className="bgCircle" />
        </div>
      </div>
    </MessagingContainer>
  )
}