/* ----- 漢堡選單功能 ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  // 如果目前的 class 是 nav-menu，就加上 responsive 來打開選單
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- 捲動時導覽列變色與 Active Link 切換 ----- */
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]"); // 只選取有 id 的 section

function scrollActive() {
  const scrollY = window.scrollY;

  // 1. 處理 Header 陰影變化
  if (scrollY > 10) {
    header.classList.add("scrolled");
    header.classList.remove("top");
  } else {
    header.classList.remove("scrolled");
    if (scrollY === 0) header.classList.add("top");
    else header.classList.remove("top");
  }

  // 2. 處理導覽列 Active 狀態
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100, // 稍微調整偏移量
      sectionId = current.getAttribute("id");

    // 檢查是否有對應的連結
    const link = document.querySelector("nav .nav-menu a[href*=" + sectionId + "]");

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- 平滑捲動 (給所有 data-target 按鈕) ----- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var sel = btn.getAttribute("data-target");
      var el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
