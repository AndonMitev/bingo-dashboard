import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  formatAddress,
  formatTimestamp
} from '../../components/BoxContents/SeasonConfig';
import { Loader } from '../../components/ContentLoader';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { fetchSymbolInfo } from '../../services/fetchSymbolsInfo';

export const SymbolDetailsScreen = () => {
  const { symbol } = useParams();
  const { isLoading, data } = useQuery(['fetchSymbolInfo', symbol], () =>
    fetchSymbolInfo(symbol)
  );

  const sorted = useMemo(() => {
    if (!data?.data) {
      return [];
    }

    return data?.data
      .map((e) => Object.values(e).filter((e, idx) => idx !== 0))
      .map((e) => {
        console.log(e);
        const [address] = e;
        return [formatAddress(address)];
      });
  }, [data]);

  return (
    <div>
      <Header title={`Symbol details: ${symbol}`} />
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <Table
          tableHeaders={['Minted At', 'From', 'Tx Hash']}
          tableData={sorted}
        />
      )}
    </div>
  );
};
