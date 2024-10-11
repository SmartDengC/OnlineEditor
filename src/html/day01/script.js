// // 获取到所有的.panel的标签
// const panels = document.querySelectorAll(".panel");

// // 循环每一个panel
// panels.forEach((panel) => {
//   // 添加一个click的事件
//   // 调用自定义的方法
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     // 然后在给点击的panel添加active的class
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((x) => {
//     // 先取消所有的active
//     x.classList.remove("active");
//   });
// }

const panels = document.querySelectorAll(".panel");
panels.forEach((x) => {
  x.addEventListener("click", () => {
    removeActive();
    x.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((x) => {
    x.classList.remove("active");
  });
}
