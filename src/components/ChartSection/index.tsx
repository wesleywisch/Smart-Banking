import chart from '../../assets/chart.svg';

import { ChartStats } from '../CharStats';
import { AnimatedButton } from '../Buttons';

import { ChartSectionContainer, ChartLeft, ChartRight } from './styles';

export function ChartSection() {
  return (
    <ChartSectionContainer>
      <div className="chart-con">
        <ChartLeft>
          <div className="stats">
            <div className="stats-money">
              <ChartStats
                name='Balance'
                amount='$250'
              />

              <ChartStats
                name='Last Transaction'
                amount='$1,000'
              />
            </div>

            <img src={chart} alt="Gráfico" />
          </div>
        </ChartLeft>
        <ChartRight>
          <h2 className="secondary-heading">
            Manage your finances like a pro in no time
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id aliquam, perspiciatis voluptatem nam odio laudantium debitis minus qui possimus quisquam maiores unde earum? Nobis?
          </p>

          <AnimatedButton 
            title='Learn More'
          />
        </ChartRight>
      </div>
    </ChartSectionContainer>
  )
}