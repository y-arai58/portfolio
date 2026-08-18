import './Works.scss';

type WorkItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const works: WorkItem[] = [
  {
    title: 'ポートフォリオサイト',
    description: 'React + TypeScript + Viteで構築した本サイト',
    image: '/portfolio/works/portfolio.png',
    href: 'https://y-arai58.github.io/portfolio/',
  },
  {
    title: 'rec-recipe',
    description:
      '「今日何食べる？」に答える献立提案アプリ。5問の診断で献立を提案し、まとめ買い用の買い物リストも作成できる',
    image: '/portfolio/works/rec-recipe.png',
    href: 'https://y-arai58.github.io/rec-recipe/',
  },
  {
    title: '採用管理ツール',
    description:
      '応募者の進行状況をフロー管理し、面談日程をカレンダーで確認できる社内向けツール',
    image: '/portfolio/works/saiyou-kanri.png',
  },
  {
    title: 'Toruto',
    description:
      '「撮った瞬間に完成する」がコンセプトのiPhone向けフィルムカメラ風アプリ',
    image: '/portfolio/works/toruto.png',
  },
];

export const Works: React.FC = () => {
  return (
    <div className='worksWrapper'>
      <h2 className='worksHeading'>制作物</h2>
      <div className='works'>
        <div className='worksInner'>
          {works.map((work) => (
            <div className='worksContents' key={work.title}>
              {work.href && (
                <a
                  className='worksLink'
                  href={work.href}
                  target='_blank'
                  rel='noopener noreferrer'
                />
              )}
              <img className='worksImage' src={work.image} />
              <p className='worksTitle'>{work.title}</p>
              <p className='worksDescription'>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
