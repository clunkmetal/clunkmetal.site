// ===================== ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК =====================
// Находим все кнопки-вкладки в шапке (ИНФОРМАЦИЯ / АФИША / МУЗЫКА / МЕРЧ)
const tabs = document.querySelectorAll('.tab-btn');

// вынесли переключение вкладки в отдельную функцию, чтобы вызывать её и по клику, и по ссылке
function openTab(target){
  tabs.forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  document.querySelector(`.tab-btn[data-target="${target}"]`).classList.add('active');
  document.getElementById(target).classList.add('active');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    openTab(tab.dataset.target);
    // записываем в адресную строку #music, #afisha и т.д. без перезагрузки страницы
    history.pushState(null, '', '#' + tab.dataset.target);
  });
});

// при открытии сайта с готовой ссылкой (например clunk.ru/#afisha) - сразу открыть нужную вкладку
const hashTab = window.location.hash.replace('#', '');
if (hashTab && document.getElementById(hashTab)) {
  openTab(hashTab);
}

// ===================== КАРУСЕЛЬ ФОТО (вкладка "Информация") =====================
let carouselIndex = 0; // текущий индекс показанного фото

function moveCarousel(dir){
  // dir: -1 (назад) или 1 (вперёд), передаётся из кнопок в HTML: onclick="moveCarousel(-1)"
  const track = document.getElementById('carouselTrack');
  const slides = track.children.length; // сколько всего фото в карусели

  // зацикливаем индекс, чтобы после последнего фото снова шло первое
  carouselIndex = (carouselIndex + dir + slides) % slides;

  // сдвигаем ленту фото на нужный процент
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
}
