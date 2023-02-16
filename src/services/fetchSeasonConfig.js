import { api } from './axios'

export const fetchSeasonConfig = async () => await api.get('/season-manager/config')

export const getCurrentSeason = async () => await api.get('/season-manager/current')