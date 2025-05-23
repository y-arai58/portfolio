import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';
import { Fv } from './components/Fv';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav';

function App() {
  return (
    <div>
      <div className='bgImage'>
        <Header />
        <Fv />
      </div>
      <Nav />
    </div>
  );
}

export default App;
