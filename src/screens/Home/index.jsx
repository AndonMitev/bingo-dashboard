import './style.css';

import { MintedSymbolsForWave } from '../../components/BoxContents/MintedSymbolsForWave';
import { SeasonConfig } from '../../components/BoxContents/SeasonConfig';
import { TotalPlayers } from '../../components/BoxContents/TotalPlayers/TotalPlayers';
import { Header } from '../../components/Header';
import { useEffect } from 'react';
import { getWinners } from '../../services/web3';
import { queryClient } from '../../main';
import { fetchPlayersData } from '../../services/fetchPlayersData';

export const Home = () => {
  useEffect(() => {
    (async () => {
      await queryClient.prefetchQuery('winners', getWinners);
      const query = queryClient.getQueriesData('winners');

      await queryClient.prefetchQuery({
        queryKey: ['winnersData', query[0][1]],
        queryFn: () => fetchPlayersData(query[0][1])
      });
    })();
  }, []);

  return (
    <div className='App'>
      <Header title='OPN Network Bingo Dashboard' />
      <div className='box-row'>
        <SeasonConfig />
        <TotalPlayers />
      </div>
      <MintedSymbolsForWave />
    </div>
  );
};
