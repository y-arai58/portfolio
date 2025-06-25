import './Fv.scss';

export const Fv: React.FC = () => {
  return (
    <div className='fv'>
      <div className='fvInner'>
        <img className='fvIcon' src='/ushimikan.jpg' />
        <div className='fvInfoContainer'>
          <p className='fvPost'>フロントエンドエンジニア</p>
          <p className='fvName'>yui arai</p>
          <p className='fvFrom'>横浜市</p>
          <p className='fvCharacter'>
            フロントエンドエンジニア/CSSアニメーションが得意/猫好き
          </p>
        </div>
      </div>
    </div>
  );
};
