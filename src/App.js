import LocationSearchInput from './component/Places';
import './App.css';
import Wobble from 'react-reveal/Wobble';

function App() {
  return (
    <div className="App">
         <Wobble>
          <h1>BigNova Go -search places-</h1>
        </Wobble>
      <LocationSearchInput apiKey={`AIzaSyBB3lfHEHJU8t5ZJTbwMgkOgMsWH5dysOo`}/>
    </div>
  );
}

export default App;
