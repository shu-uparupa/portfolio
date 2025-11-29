
//要素の定義
const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const totalSlides = 3; //スライドの総数
let count = 0;　//スタート時のカウント数

//関数の定義
function nextClick() {
  slide.classList.remove( `slide${count % totalSlides + 1}` );
  //カウントをスライドの総数で割った余りに1を足すことで、スライドがループ。
  count++;
  slide.classList.add( `slide${count % totalSlides + 1}` );
}
function prevClick() {
  slide.classList.remove( `slide${count % totalSlides + 1}` );
  count--;
  if (count < 0) count = totalSlides - 1;
  //カウントを負の値にしないように調整
  slide.classList.add( `slide${count % totalSlides + 1}` );
}

//ボタンに関数を割り当てる
next.addEventListener('click', () => {
  nextClick();
});
prev.addEventListener('click', () => {
  prevClick();
});