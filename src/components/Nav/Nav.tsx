import './Nav.scss';

type Props = {
  currentTab: 'works' | 'skills' | 'career' | 'contact';
  setTab: (tab: 'works' | 'skills' | 'career' | 'contact') => void;
};

export const Nav: React.FC<Props> = ({ currentTab, setTab }) => {
  return (
    <div className='nav'>
      <div className='navInner'>
        <p
          onClick={() => setTab('works')}
          className={`navItem ${currentTab === 'works' ? 'navItemActive' : ''}`}
        >
          制作物
        </p>
        <p
          onClick={() => setTab('skills')}
          className={`navItem ${
            currentTab === 'skills' ? 'navItemActive' : ''
          }`}
        >
          スキル
        </p>
        <p
          onClick={() => setTab('career')}
          className={`navItem ${
            currentTab === 'career' ? 'navItemActive' : ''
          }`}
        >
          経歴
        </p>
      </div>
    </div>
  );
};
