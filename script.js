// 导航切换
const navToggle = document.getElementById('nav-toggle');
const navList   = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => navList.classList.toggle('show'));

// 平滑滚动 & 高亮
document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth' });
    navList.classList.remove('show');
  });
});

// ScrollReveal 简易实现
const reveals = document.querySelectorAll('.reveal');
function onScroll() {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.classList.add('active');
  });
}
window.addEventListener('scroll', onScroll);
onScroll();

// 轮播逻辑
const track = document.querySelector('.carousel__track');
const pubs  = Array.from(track.children);
const prev  = document.querySelector('.prev');
const next  = document.querySelector('.next');
let idx = 0;
function updateCarousel() {
  track.style.transform = `translateX(-${idx * pubs[0].offsetWidth}px)`;
}
prev.addEventListener('click', () => {
  idx = (idx - 1 + pubs.length) % pubs.length;
  updateCarousel();
});
next.addEventListener('click', () => {
  idx = (idx + 1) % pubs.length;
  updateCarousel();
});
setInterval(() => {
  next.click();
}, 5000);

// 技能条动画
const fills = document.querySelectorAll('.fill');
fills.forEach(el => {
  const percent = el.dataset.percent;
  setTimeout(() => {
    el.style.width = percent;
  }, 600);
});

// 回到顶部
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
backBtn.addEventListener('click', () =>
  window.scrollTo({ top:0, behavior:'smooth' })
);
// 把这一段移到脚本最前面，包裹在 DOMContentLoaded 回调里
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.fill');
  fills.forEach(el => {
    const percent = el.dataset.percent;
    // 延迟一点点，让过渡更自然
    setTimeout(() => {
      el.style.width = percent;
    }, 600);
  });
});
