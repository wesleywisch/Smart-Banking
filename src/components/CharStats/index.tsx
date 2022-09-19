import { ChartStatsContainer } from './styles';

type ChartStatsProps = {
  name: string;
  amount: string;
}

export function ChartStats({ name, amount }: ChartStatsProps) {
  return (
    <ChartStatsContainer>
      <p><b>{name}</b></p>
      <h5>{amount}</h5>
    </ChartStatsContainer>
  )
}