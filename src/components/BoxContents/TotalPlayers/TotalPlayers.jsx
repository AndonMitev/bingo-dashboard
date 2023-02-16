import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { fetchPlayersInfo } from '../../../services/fetchSymbolsInfo';
import { Box } from '../../Box';
import { BoxHeader } from '../../BoxHeader';
import { Loader } from '../../ContentLoader';
import { Count } from '../../CountUp';

export const TotalPlayers = () => {
  const { data, isLoading } = useQuery({
    queryKey: 'totalPlayers',
    queryFn: fetchPlayersInfo,
    refetchInterval: 60_000
  });

  const navigate = useNavigate();

  const navigateToPlayersTable = () => {
    // navigate('/players');
  };

  return (
    <Box onClick={navigateToPlayersTable}>
      <BoxHeader title={'Game Stats'} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <p className='text-content'>Total Mints: </p>
        {isLoading ? (
          <Loader />
        ) : (
          <p className='text-content'>
            <Count end={data.data.totalPlayers.length} />
          </p>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <p className='text-content'>Total Players: </p>
        {isLoading ? (
          <Loader />
        ) : (
          <p className='text-content'>
            <Count end={data.data.uniquePlayers.length} />
          </p>
        )}
      </div>
    </Box>
  );
};
