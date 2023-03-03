import { Contract, JsonRpcProvider, AbiCoder } from 'ethers';
import BINGO_ABI from './bingoAbi.js';

import { Formatter, StaticJsonRpcProvider } from '@ethersproject/providers';

class CustomFormatter extends Formatter {
  getDefaultFormats() {
    return {
      ...super.getDefaultFormats(),
      block: {
        ...super.getDefaultFormats().block,
        timestamp: super.bigNumber,
      },
    };
  }
}

export class CustomJsonRpcProvider extends StaticJsonRpcProvider {
  formatter = new CustomFormatter();
}

const providerUrl = 'https://gateway.opn.network/node/ext/bc/2VsZe5DstWw2bfgdx3YbjKcMsJnNDjni95sZorBEdk9L9Qr9Fr/rpc';
const contractAddress = '0x70CDEe8c5A3c3cEe705cCDe6Ddaa1Db1a31F4fA7';

const provider = new CustomJsonRpcProvider(
  {
    url: 'https://k0v5srs0v6-k0rf0tow1d-rpc.kr0-aws.kaleido.io/',
    user: 'k0nq7p2xxt',
    password: 'riFDj2aRMjarC2EWnQqaGb2fOg9X219oBY8hTjOuhTs',
  },
  3776,
);
const contract = new Contract(contractAddress, BINGO_ABI, provider);

export const getWinners = async () => {
  const logs = await provider.getLogs({
    address: contractAddress,
    fromBlock: 3865,
    topics: ['0xe6b9e1659282e93b3a484308db69e5d1cac21051d45ee0fcb6f72399541cec86']
  })



  const original = ['0x03f2cf40d6FaC1ACAE9A6C4FC78da55dc337bCC7',
    '0x4a802f0fbEe479c7586198A92DD8E411229D16E4',
    '0x0C36ad77Dc9C60Ec819018e6adE4F39cADF8826B',
    '0x062E4A752a14326485c07B5781C30e5b9A91312b',
    '0x268d5748E73F7A53CdCDAa068556d196341F3c6e']
    .map(addr => ({
      address: addr,
    }))

  return [...original, ...logs.map((log, idx) => {
    const parsed = contract.interface.parseLog(log);



    return {
      address: parsed.args[0],
    }
  })]


}
