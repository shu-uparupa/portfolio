
document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // メニュー内のリンククリックで閉じる
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // スライドの切り替え
  const slide = document.getElementById('slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  if (!slide || !prev || !next) return;

  const totalSlides = slide.children.length; // 内部のスライド数に基づく
  let index = 0; // 0-based

  function update() {
    // クラスをリセットして現在の位置のクラスを付与
    slide.classList.remove(...Array.from({length: totalSlides}, (_,i) => `slide${i+1}`));
    slide.classList.add(`slide${index+1}`);
  }

  function nextSlide() { index = (index + 1) % totalSlides; update(); }
  function prevSlide() { index = (index - 1 + totalSlides) % totalSlides; update(); }

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);

  // キーボード対応
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });


  update();
});