document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("rotatingImage");

  function checkOrientation() {
    image.classList.toggle("rotate", window.innerWidth < window.innerHeight);
  }

  // 初始检查
  checkOrientation();

  // 监听窗口大小变化
  window.addEventListener("resize", checkOrientation);
});
