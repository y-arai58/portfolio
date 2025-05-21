// src/components/HeroSection.tsx
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <header className={styles.fv}>
      <div className={styles.fvContent}>
        <h1>
          こんにちは、
          <br />
          社会人2年目のITエンジニアです。
        </h1>
        <p>
          実務で培った技術力と、
          <br />
          課題解決力で、
          <br />
          チームやサービスに価値を提供します。
        </p>
        <div className={styles.buttons}>
          <a href="#portfolio" className={styles.btn}>
            ポートフォリオを見る
          </a>
          <a href="#skills" className={styles.btn}>
            スキル
          </a>
          <a href="#works" className={styles.btn}>
            制作物
          </a>
        </div>
      </div>
      <div className={styles.fvImage}>
        <img
          src="/A_digital_graphic_of_a_portfolio_landing_page_for_.png"
          alt="エンジニアのイラスト"
        />
      </div>
    </header>
  );
};

export default HeroSection;
