import arrow from '../../assets/arrow.svg';
import blob1 from '../../assets/blob_top.svg';
import blob2 from '../../assets/blob_bottom.svg';

import { ButtonPrimaryProps, SecondaryButtonProps, AnimatedButtonProps } from './types';
import { ButtonPrimary, ButtonSecondary, ButtonAnimated } from './styles';

export function PrimaryButton({ title }: ButtonPrimaryProps) {
  return (
    <ButtonPrimary>
      {title}
    </ButtonPrimary>
  );
}

export function SecondaryButton({ title }: SecondaryButtonProps) {
  return (
    <ButtonSecondary>
      {title} <img src={arrow} alt="Arrow" />
    </ButtonSecondary>
  );
}

export function AnimatedButton({ title }: AnimatedButtonProps) {
  return (
    <ButtonAnimated>
      {title} <img src={arrow} alt="Arrow" />
      <img src={blob1} alt="blob1" className='blob1' />
      <img src={blob2} alt="blob2" className='blob2'  />
    </ButtonAnimated>
  );
}
