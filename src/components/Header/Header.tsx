import { GoMail } from 'react-icons/go';
import './Header.scss';
import { useEffect, useState } from 'react';

// Propsの型を定義
type HeaderProps = {
  setTab: (tab: 'skills' | 'career' | 'contact') => void;
};

export const Header: React.FC<HeaderProps> = ({ setTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションの高さ（例: 500px）を超えたらヘッダーの色を変える
      const heroSectionHeight = 500;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // お問い合わせタブに切り替えるハンドラー
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTab('contact');
    // トップに戻る処理（オプション）
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };

  // 画面最上部に戻るハンドラー
  const handleTopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`headerWrapper ${isScrolled ? 'headerScrolled' : ''}`}>
      <div className='header'>
        <div
          className={`headerInner ${isScrolled ? 'headerInnerScrolled' : ''}`}
        >
          <div className='headerContents'>
            <a
              className={`headerMe ${isScrolled ? 'headerMeScrolled' : ''}`}
              href='#top'
              onClick={handleTopClick}
            >
              <img
                className='headerIcon'
                src='https://y-arai58.github.io/portfolio/assets/ushimikan.jpg'
              />
              <p className='headerName'>yui arai</p>
            </a>
            <p
              onClick={handleTopClick}
              className={`headerLogo ${isScrolled ? 'headerMeScrolled' : ''}`}
            >
              portfolio
            </p>
            <div className='headerIconMail'>
              <a href='#contact' onClick={handleContactClick}>
                <GoMail size={30} color={isScrolled ? '#333' : '#000'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
