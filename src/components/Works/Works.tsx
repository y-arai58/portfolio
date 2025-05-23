import './Works.scss';

export const Works: React.FC = () => {
  return (
    <div className='worksWrapper'>
      <h2 className='worksHeading'>制作物</h2>
      <div className='works'>
        <div className='worksInner'>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test1</p>
          </div>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test2</p>
          </div>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test3</p>
          </div>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test4</p>
          </div>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test5</p>
          </div>
          <div className='worksContents'>
            <a className='worksLink' href='/' />
            <img className='worksImage' src='/public/lgtmeow.webp' />
            <p className='worksTitle'>test6</p>
          </div>
        </div>
      </div>
    </div>
  );
};
