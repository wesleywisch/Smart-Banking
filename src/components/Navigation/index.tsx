import logo from '../../assets/logo.svg';

import { PrimaryButton } from '../Buttons';

import { NavigationContainer } from './styles';

export function Navigation() {
  return (
    <NavigationContainer>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/features">Features</a>
        </li>

        <li>
          <a href="/pricing">Pricing</a>
        </li>
      </ul>

      <PrimaryButton title='Sign Up' />
    </NavigationContainer>
  )
}