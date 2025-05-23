import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <div className='nav'>
      <div className='navInner'>
        <p className='navItem'>制作物</p>
        <p className='navItem'>スキル</p>
        <p className='navItem'>経歴</p>
      </div>
    </div>
  );
};
