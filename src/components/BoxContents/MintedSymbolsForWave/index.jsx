import { useQuery } from 'react-query';

import { fetchSymbolsForWave } from '../../../services/fetchSymbolsInfo';
import { Box } from '../../Box';
import { BoxHeader } from '../../BoxHeader';
import { Loader } from '../../ContentLoader';
import { Table } from '../../Table';

export const MintedSymbolsForWave = () => {
  const { data, isLoading } = useQuery('mintedSymbols', fetchSymbolsForWave);
  console.log();
  return isLoading ? (
    <Loader />
  ) : (
    <Table tableHeaders={['Symbol', 'Minted']} tableData={data.data} />
  );
};
