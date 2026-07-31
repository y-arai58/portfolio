import './Nav.scss';

type Tab = 'skills' | 'career' | 'works' | 'contact';

type Props = {
  currentTab: Tab;
  setTab: (tab: Tab) => void;
};

export const Nav: React.FC<Props> = ({ currentTab, setTab }) => {
  return (
    <div className='nav'>
      <div className='navInner'>
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
        <p
          onClick={() => setTab('works')}
          className={`navItem ${
            currentTab === 'works' ? 'navItemActive' : ''
          }`}
        >
          制作物
        </p>
      </div>
    </div>
  );
};
