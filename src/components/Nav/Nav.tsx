import './Nav.scss';

type Props = {
  currentTab: 'skills' | 'career' | 'contact';
  setTab: (tab: 'skills' | 'career' | 'contact') => void;
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
      </div>
    </div>
  );
};
