import { api } from './axios';

export const fetchSymbolsForWave = async () => await api.get('/message-manager/minted-nfts')

export const fetchPlayersInfo = async () => await api.get('/message-manager/total-players')

export const fetchSymbolsInfo = async () => await api.get('/message-manager/symbols')