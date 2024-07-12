// import React, { useEffect, useRef } from 'react';
// import { assetPrefix } from '@/util/assetPath';
// import styles from '@/styles/components/Campaign/ScratchAnimation.module.scss';
// import Vivus from 'vivus';

// type Props = {
//   id: string;
//   invalid: boolean;
//   openModal?: () => void;
//   loading: boolean;
//   scratch: boolean;
// };

// export const ScratchAnimation: React.FC<Props> = (props) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const containerElement = containerRef.current;
//     const svgElement = svgRef.current;
//     if (containerElement && svgElement) {
//       const vivus = new Vivus(svgElement.id, {
//         type: 'oneByOne',
//         duration: 80,
//         delay: 4 * 1000,
//         animTimingFunction: Vivus.EASE,
//         start: 'manual',
//       });

//       const handleAnimation = () => {
//         vivus.play(1);
//       };
//       const disableOtherContainers = () => {
//         document.querySelectorAll('div')?.forEach((div) => {
//           div.classList.add(styles.disabled);
//         });
//       };

//       containerElement.addEventListener('click', () => {
//         if (!props.invalid) {
//           handleAnimation();
//         }
//         setTimeout(disableOtherContainers, 100);
//       });

//       // クリーンアップ
//       return () => {
//         containerElement.removeEventListener('click', () => {
//           handleAnimation();
//         });
//       };
//     }
//   }, [props.id]);

//   return (
//     <>
//       {props.loading && (
//         <div className={styles.loadingWrap}>
//           <div className={styles.loadingCoin}>
//             <div className={styles.loadingCoin01}>
//               <img src={assetPrefix('/images/lp/coin.png')} alt='' />
//             </div>
//             <div className={styles.loadingCoin02}>
//               <img src={assetPrefix('/images/lp/coin.png')} alt='' />
//             </div>
//           </div>
//         </div>
//       )}
//       {props.scratch && (
//         <div
//           ref={containerRef}
//           className={styles.container}
//           onClick={props.openModal}
//         >
//           <img
//             className={styles.base}
//             src={assetPrefix('/images/lp/scratch_parts_A.svg')}
//           />
//           <svg
//             ref={svgRef}
//             className={styles.scratchSvg}
//             version='1.1'
//             id={`scratch-${props.id}`}
//             xmlns='http://www.w3.org/2000/svg'
//             xmlnsXlink='http://www.w3.org/1999/xlink'
//             x='0px'
//             y='0px'
//             viewBox='0 0 152 152.4'
//             xmlSpace='preserve'
//           >
//             <image
//               xmlnsXlink='http://www.w3.org/1999/xlink'
//               xlinkHref={assetPrefix('/images/lp/scratch_parts_H.svg')}
//               width='100%'
//               height='100%'
//               mask={`url(#clipmask${props.id})`}
//             ></image>
//             <mask id={`clipmask${props.id}`} maskUnits='objectBoundingBox'>
//               <path
//                 className={styles.st0}
//                 fill='none'
//                 stroke='#fff'
//                 strokeLinecap='round'
//                 strokeMiterlimit='10'
//                 strokeWidth='26px'
//                 d='M91.9 37.2 L49.8 66.2 L103.1 59.6 L47 95.2 L105 84.9 L63.8 114.8'
//               />
//             </mask>
//           </svg>
//         </div>
//       )}
//     </>
//   );
// };
