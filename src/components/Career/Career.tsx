import './Career.scss';

export const Career: React.FC = () => {
  return (
    <div className='career'>
      <div className='careerInner'>
        <div className='careerTimeline'>
          <h2 className='careerTimelineHeading'>経歴</h2>
          <div className='careerTimelineItem'>
            <div className='careerTimelinePeriod'>
              <p className='careerTimelineYear'>2023年8月 - 現在</p>
            </div>
            <div className='careerTimelineContent'>
              <h3 className='careerTimelineCompany'>株式会社サードスコープ</h3>
              <p className='careerTimelinePosition'>エンジニア</p>
              <p className='careerTimelineDescription'>
                インターンシップを経て、2024年4月より正社員として入社。 <br />
                フロントエンドエンジニアとして、主にReact/TypeScriptを用いたWebアプリケーションやWebサイトの開発に従事。{' '}
                <br />
                NestJSなどのバックエンド技術も学びながら、フルスタックエンジニアを目指している。{' '}
                <br />
                また、デザインやUX/UIにも興味があり、Figmaを用いたプロトタイピングやユーザビリティテストの実施なども行っている。
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
              <p className='careerTimelineYear'>2020年7月 - 2023年3月</p>
            </div>
            <div className='careerTimelineContent'>
              <h3 className='careerTimelineCompany'>株式会社東急オアシス</h3>
              <p className='careerTimelinePosition'>動画編集者</p>
              <p className='careerTimelineDescription'>
                SNS用,Youtube用の動画コンテンツを制作。 <br />
                Adobe
                PremiereProを使用し、受け取った撮影データから、カット編集やテロップ入れ、BGMの選定を行うなど、動画制作の全工程を担当。
              </p>
              <div className='careerTimelineTech'>
                <span className='careerTimelineTechItem'>Premiere Pro</span>
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
                <br />
                他ゼミの卒業制作の補助として、Rを用いた収集データの分析を担当。
                <br />
                統計学以外の分野では、消費者心理学や行動経済学に興味を持ち、Webサイトやアプリにおいて消費者がどのように行動するかなど、デザインが与える心理的効果について研究。
                <br />
                <br />
                緊急事態宣言発令中を含み、1年間大学を休学して動画編集のインターンと独学でのプログラミング学習に注力した。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
