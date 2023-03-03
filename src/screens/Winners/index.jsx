import { height } from '@mui/system';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Box } from '../../components/Box';
import {
  formatAddress,
  formatTimestamp
} from '../../components/BoxContents/SeasonConfig';
import { Loader } from '../../components/ContentLoader';
import { Header } from '../../components/Header';
import { fetchPlayersData } from '../../services/fetchPlayersData';

import { getWinners } from '../../services/web3';

export const WinnersScreen = () => {
  const { data, isLoading } = useQuery('winners', getWinners);
  console.log(data);
  const winnersData = useQuery({
    queryKey: ['winnersData', data],
    queryFn: () => fetchPlayersData(data),
    enabled: !isLoading
  });

  const openExplorer = (txHash) => {
    window.open(`http://explorer.opn.network/tx/${txHash}`, '_blank');
  };

  return (
    <div className='App'>
      <Header title='Hall of fame' />
      <div className='box-row'>
        {winnersData.isLoading ? (
          <Loader />
        ) : (
          winnersData?.data?.map(({ result: { ons, pfp } }, idx) => (
            <Box key={idx}>
              <div style={{ display: 'flex', gap: 25 }}>
                <div style={{ width: 150 }}>
                  <img src={pfp} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 5
                  }}
                >
                  <p className='text-content' style={{ marginBottom: 0 }}>
                    ONS: {ons}
                  </p>
                  <p className='text-content' style={{ marginBottom: 0 }}>
                    Winner: #{idx + 1}
                  </p>
                </div>
              </div>
            </Box>
          ))
        )}
      </div>
    </div>
  );
};
