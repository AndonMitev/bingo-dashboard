import { Contract, JsonRpcProvider, AbiCoder } from 'ethers';
import BINGO_ABI from './bingoAbi.js';

const providerUrl = 'https://gateway.opn.network/node/ext/bc/2VsZe5DstWw2bfgdx3YbjKcMsJnNDjni95sZorBEdk9L9Qr9Fr/rpc';
const contractAddress = '0x9d17b2b18f75a61ffb556ff9a28bbb3055c58543';

const provider = new JsonRpcProvider(providerUrl);
const contract = new Contract(contractAddress, BINGO_ABI, provider);

export const getWinners = async () => {
  const logs = await provider.getLogs({
    address: contractAddress,
    fromBlock: 3865,
    topics: ['0xe6b9e1659282e93b3a484308db69e5d1cac21051d45ee0fcb6f72399541cec86']
  })

  const blocks = logs.map(log => provider.getBlock(log.blockNumber));


  const blockTimestamps = await (await Promise.all(blocks)).map((block, idx) => ({
    timestamp: block.timestamp,
    txHash: logs[idx].transactionHash
  }))


  return logs.map((log, idx) => {
    const parsed = contract.interface.parseLog(log);

    return {
      address: parsed.args[0],
      timestamp: blockTimestamps[idx].timestamp,
      txHash: blockTimestamps[idx].txHash
    }
  })


}
