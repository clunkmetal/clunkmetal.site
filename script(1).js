// ===================== ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК =====================
// Находим все кнопки-вкладки в шапке (ИНФОРМАЦИЯ / АФИША / МУЗЫКА / МЕРЧ)
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // убираем активный класс со всех вкладок и секций
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // включаем нужную вкладку и соответствующую ей секцию
    // (связь идёт через data-target в HTML, который совпадает с id секции)
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

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
