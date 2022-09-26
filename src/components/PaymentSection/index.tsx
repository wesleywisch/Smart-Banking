import { Card } from '../Card';

import cardImg from '../../assets/creditcard.svg';
import activeImg from '../../assets/active.svg';
import inactiveImg from '../../assets/inactive.svg';
import checkImg from '../../assets/check.svg';
import checkDisabledImg from '../../assets/check-disabled.svg';

import { PaymentSectionContainer, CardCon } from './styles';

export function PaymentSection() {
  return (
    <PaymentSectionContainer>
      <h3 className="small-heading">
        An exceptional service, <span>at the right price</span>
      </h3>

      <p className='c-para'>Start with our free plan and switch to premium as you grow.</p>

      <CardCon>
        <Card
          account='Free'
          amount='$0'
          text='Manage your business with a simple and efficient account.'
          button='Get Started'
          card={cardImg}
          active={activeImg}
          inactive={inactiveImg}
          check={checkImg}
          checkDisabled={checkDisabledImg}
          text1='10 free local transfers'
          text2='Free ATM withdrawals in Dollar up to $250 per month'
          text3='Free payments to other Draft accounts'
          text4='Prepaid debit cards'
          text5='Virtual cards'
          text6='Priority 24/7 support'
          text7='Exchange 24 currencies'
          text8='Multi-user access'
        />

        <Card
          account='Premium'
          amount='$10'
          text='Manage your business with a simple and efficient account.'
          button='Get Started'
          card={cardImg}
          active={activeImg}
          inactive={inactiveImg}
          check={checkImg}
          checkDisabled={checkDisabledImg}
          text1='10 free local transfers'
          text2='Free ATM withdrawals in Dollar up to $250 per month'
          text3='Free payments to other Draft accounts'
          text4='Prepaid debit cards'
          text5='Virtual cards'
          text6='Priority 24/7 support'
          text7='Exchange 24 currencies'
          text8='Multi-user access'
        />
      </CardCon>
    </PaymentSectionContainer>
  )
}