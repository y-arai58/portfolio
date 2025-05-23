import './Career.scss';

export const Career: React.FC = () => {
  return (
    <div className='career'>
      <div className='careerInner'>
        <div className='careerTimeline'>
          <h2 className='careerTimelineHeading'>経歴</h2>
          <div className='careerTimelineItem'>
            <div className='careerTimelinePeriod'>
              <p className='careerTimelineYear'>2023年4月 - 現在</p>
            </div>
            <div className='careerTimelineContent'>
              <h3 className='careerTimelineCompany'>株式会社〇〇</h3>
              <p className='careerTimelinePosition'>フロントエンドエンジニア</p>
              <p className='careerTimelineDescription'>
                React/TypeScriptを用いたWebアプリケーション開発に従事。大規模ECサイトのUI/UX改善プロジェクトでは、パフォーマンス最適化により表示速度を30%向上させた。
              </p>
              <div className='careerTimelineTech'>
                <span className='careerTimelineTechItem'>React</span>
                <span className='careerTimelineTechItem'>TypeScript</span>
                <span className='careerTimelineTechItem'>Next.js</span>
              </div>
            </div>
          </div>

          <div className='careerTimelineItem'>
            <div className='careerTimelinePeriod'>
              <p className='careerTimelineYear'>2021年4月 - 2023年3月</p>
            </div>
            <div className='careerTimelineContent'>
              <h3 className='careerTimelineCompany'>株式会社△△</h3>
              <p className='careerTimelinePosition'>Webデザイナー / コーダー</p>
              <p className='careerTimelineDescription'>
                コーポレートサイトのデザインとコーディングを担当。WordPressを活用した更新しやすいサイト構築に取り組んだ。5件以上のサイトリニューアルプロジェクトを成功に導いた。
              </p>
              <div className='careerTimelineTech'>
                <span className='careerTimelineTechItem'>HTML</span>
                <span className='careerTimelineTechItem'>CSS</span>
                <span className='careerTimelineTechItem'>JavaScript</span>
                <span className='careerTimelineTechItem'>WordPress</span>
              </div>
            </div>
          </div>

          <div className='careerTimelineItem'>
            <div className='careerTimelinePeriod'>
              <p className='careerTimelineYear'>2019年4月 - 2024年3月</p>
            </div>
            <div className='careerTimelineContent'>
              <h3 className='careerTimelineCompany'>明治学院大学</h3>
              <p className='careerTimelinePosition'>心理学部</p>
              <p className='careerTimelineDescription'>
                心理統計学を専攻し、データ分析や研究手法について学ぶ。
                他ゼミの卒業制作の補助として、収集データの分析を担当。Rを用いてデータの可視化を行った。
                統計学以外の分野では、消費者心理学や行動経済学に興味を持ち、webサイトやアプリにおいて消費者がどのように行動するか、デザインが与える心理的効果について研究。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
