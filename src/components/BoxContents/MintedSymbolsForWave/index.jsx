import { useQuery } from 'react-query';

import { fetchSymbolsForWave } from '../../../services/fetchSymbolsInfo';

import { Loader } from '../../ContentLoader';
import { Table } from '../../Table';

export const MintedSymbolsForWave = () => {
  const { data, isLoading } = useQuery('mintedSymbols', fetchSymbolsForWave);

  return isLoading ? (
    <Loader />
  ) : (
    <Table tableHeaders={['Symbol', 'Minted']} tableData={data.data} />
  );
};
