function handleScroll() {
  const header = document.querySelector('header img');
  const headerText = document.querySelector('.header-text');
  const main = document.querySelector('main');

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const fadePoint = 200;
  console.log(scrollTop);

  // スクロール位置がfadePoint未満の場合、headerを動かす
  if (scrollTop < fadePoint) {
    header.style.cssText = `transform: translateY(-${scrollTop * 1.25}px);`;
    headerText.style.cssText = `transform: translateY(-${scrollTop * 1.25}px);`;
    main.style.cssText = 'position:fixed';
  } else {
    header.style.cssText = `transform: translateY(-${fadePoint * 1.25}px);`;
    headerText.style.cssText = `transform: translateY(-${fadePoint * 1.25}px);`;
    main.style.cssText = 'position:unset; padding:200px 0 0;';
    main.scroll(0, 200);
  }
}

// スクロール時にhandleScroll関数を実行
window.addEventListener('scroll', handleScroll);
