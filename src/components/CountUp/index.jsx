import CountUp from 'react-countup';

export const Count = ({ end }) => (
  <CountUp start={0} end={end} duration={0.75} />
);
