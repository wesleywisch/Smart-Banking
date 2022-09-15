import arrow from '../../assets/arrow.svg';

import { ButtonPrimaryProps, SecondaryButtonProps } from './types';
import { ButtonPrimary, ButtonSecondary } from './styles';

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
