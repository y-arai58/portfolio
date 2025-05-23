import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';
import './Skills.scss';
import { IoLogoVercel } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiFigma,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from 'react-icons/si';

export const Skills: React.FC = () => {
  return (
    <div className='skills'>
      <div className='skillsInner'>
        <div className='skillsContainer'>
          {/* フロントエンド技術 */}
          <div className='skillsCategory'>
            <h3 className='skillsCategoryTitle'>フロントエンド</h3>
            <div className='skillsGrid'>
              <div className='skillsContents'>
                <FaHtml5 size={50} />
                <p className='skillsTitle'>HTML</p>
              </div>
              <div className='skillsContents'>
                <FaCss3Alt size={50} />
                <p className='skillsTitle'>CSS</p>
              </div>
              <div className='skillsContents'>
                <SiJavascript size={50} />
                <p className='skillsTitle'>JavaScript</p>
              </div>
              <div className='skillsContents'>
                <SiTypescript size={50} />
                <p className='skillsTitle'>TypeScript</p>
              </div>
              <div className='skillsContents'>
                <FaReact size={50} />
                <p className='skillsTitle'>React</p>
              </div>
              <div className='skillsContents'>
                <RiNextjsFill size={50} />
                <p className='skillsTitle'>Next.js</p>
              </div>
            </div>
          </div>

          {/* バックエンド技術 */}
          <div className='skillsCategory'>
            <h3 className='skillsCategoryTitle'>バックエンド</h3>
            <div className='skillsGrid'>
              <div className='skillsContents'>
                <FaNodeJs size={50} />
                <p className='skillsTitle'>Node.js</p>
              </div>
              <div className='skillsContents'>
                <SiNestjs size={50} />
                <p className='skillsTitle'>NestJS</p>
              </div>
              <div className='skillsContents'>
                <SiPrisma size={50} />
                <p className='skillsTitle'>Prisma</p>
              </div>
              <div className='skillsContents'>
                <SiPhp size={50} />
                <p className='skillsTitle'>PHP</p>
              </div>
              <div className='skillsContents'>
                <SiMysql size={50} />
                <p className='skillsTitle'>MySQL</p>
              </div>
            </div>
          </div>

          {/* デザインツール */}
          <div className='skillsCategory'>
            <h3 className='skillsCategoryTitle'>デザインツール</h3>
            <div className='skillsGrid'>
              <div className='skillsContents'>
                <SiFigma size={50} />
                <p className='skillsTitle'>Figma</p>
              </div>
              <div className='skillsContents'>
                <SiAdobeillustrator size={50} />
                <p className='skillsTitle'>Illustrator</p>
              </div>
              <div className='skillsContents'>
                <SiAdobepremierepro size={50} />
                <p className='skillsTitle'>Premiere Pro</p>
              </div>
            </div>
          </div>

          {/* CMS */}
          <div className='skillsCategory'>
            <h3 className='skillsCategoryTitle'>CMS</h3>
            <div className='skillsGrid'>
              <div className='skillsContents'>
                <FaWordpress size={50} />
                <p className='skillsTitle'>WordPress</p>
              </div>
            </div>
          </div>

          {/* インフラ・開発ツール */}
          <div className='skillsCategory'>
            <h3 className='skillsCategoryTitle'>インフラ・開発ツール</h3>
            <div className='skillsGrid'>
              <div className='skillsContents'>
                <FaGithub size={50} />
                <p className='skillsTitle'>GitHub</p>
              </div>
              <div className='skillsContents'>
                <IoLogoVercel size={50} />
                <p className='skillsTitle'>Vercel</p>
              </div>
              <div className='skillsContents'>
                <FaDocker size={50} />
                <p className='skillsTitle'>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
