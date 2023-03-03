import axios from 'axios'

export const fetchPlayersData = async data => {
  const addresses = [
    '0x03f2cf40d6FaC1ACAE9A6C4FC78da55dc337bCC7',
    '0x4a802f0fbEe479c7586198A92DD8E411229D16E4',
    '0x0C36ad77Dc9C60Ec819018e6adE4F39cADF8826B',
    '0x062E4A752a14326485c07B5781C30e5b9A91312b',
    '0x268d5748E73F7A53CdCDAa068556d196341F3c6e',
    , ...data.map(info => info.address)]
  const promises = addresses.map(address => axios.get(`https://gateway.opn.network/wallet-backend-production/users/address/${address}`));

  return await (await Promise.all(promises)).map(e => e.data);
}