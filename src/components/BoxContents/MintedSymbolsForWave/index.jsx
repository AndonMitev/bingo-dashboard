import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { fetchSymbolsForWave } from '../../../services/fetchSymbolsInfo';

import { Loader } from '../../ContentLoader';
import { Table } from '../../Table';

export const MintedSymbolsForWave = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery('mintedSymbols', fetchSymbolsForWave);

  const onRowPressed = (data) => {
    const [symbol] = data;
    navigate(`/symbol/${symbol}`);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Table
      tableHeaders={['Symbol', 'Minted']}
      tableData={data.data}
      onRowPressed={onRowPressed}
    />
  );
};
