import { useQuery } from 'react-query';
import dayjs from 'dayjs';

import { getCurrentSeason } from '../../../services/fetchSeasonConfig';
import { Box } from '../../Box';
import { BoxHeader } from '../../BoxHeader';
import { Loader } from '../../ContentLoader';

export const formatTimestamp = (timestamp) =>
  dayjs(timestamp * 1000).format('D-MM-YYYY HH:mm:ss A');

export const formatAddress = (address) =>
  address.slice(0, 6) + '...' + address.slice(-6);

export const SeasonConfig = () => {
  const { data, isLoading } = useQuery('currentSeason', getCurrentSeason);

  return (
    <Box>
      <BoxHeader title='Wave' />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p className='text-content'>Current wave: {data.data.season}</p>
          <p className='text-content'>
            Start: {formatTimestamp(data.data.startTime)}
          </p>
          <p className='text-content'>
            End: {formatTimestamp(data.data.endTime)}
          </p>
        </div>
      )}
    </Box>
  );
};

// data.data.map((e) => (
//   <div key={e.season}>
//     <p>Wave: {e.season}</p>
//     <p>Starts at: {formatTimestamp(e.startTime)}</p>
//     <p>Ends at: {formatTimestamp(e.endTime)}</p>
//   </div>
// ))
