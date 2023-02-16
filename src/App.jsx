import './App.css';
import { Box } from './components/Box';
import { Header } from './components/Header';
import { SeasonConfig } from './components/BoxContents/SeasonConfig';
import { MintedSymbolsForWave } from './components/BoxContents/MintedSymbolsForWave';
import { TotalPlayers } from './components/BoxContents/TotalPlayers/TotalPlayers';
import { Table } from './components/Table';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='box-row'>
        <SeasonConfig />
        <TotalPlayers />
      </div>
      <MintedSymbolsForWave />
    </div>
  );
}

export default App;
