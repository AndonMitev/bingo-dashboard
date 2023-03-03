import axios from 'axios'

export const fetchPlayersData = async data => {
  const addresses = data.map(info => info.address)
  const promises = addresses.map(address => axios.get(`https://gateway.opn.network/wallet-backend-production/users/address/${address}`));

  return await (await Promise.all(promises)).map(e => e.data);
}