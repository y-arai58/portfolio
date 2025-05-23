import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='headerInner'>
        <div className='headerContents'>
          <a className='headerMe' href='/'>
            <img className='headerIcon' src='/public/lgtmeow.webp' />
            <p className='headerName'>yui arai</p>
          </a>
          <p className='headerLogo'>portfolio</p>
          <img
            className='headerContact'
            src='/public/mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
          />
        </div>
      </div>
    </div>
  );
};
