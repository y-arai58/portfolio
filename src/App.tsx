import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';
import { Fv } from './components/Fv';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav';
import { Works } from './components/Works';
import { useState } from 'react';
import { Skills } from './components/Skill';
import { Career } from './components/Career';
import { Contact } from './components/Contact';

type Tab = 'works' | 'skills' | 'career' | 'contact';

function App() {
  const [tab, setTab] = useState<Tab>('works');
  return (
    <div>
      <div className='bgImage'>
        <Header setTab={setTab} />
        <Fv />
      </div>
      <Nav currentTab={tab} setTab={setTab} />
      <div className='tabContents'>
        {tab === 'works' && <Works />}
        {tab === 'skills' && <Skills />}
        {tab === 'career' && <Career />}
        {tab === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
