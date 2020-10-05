import $ from "jquery";
import "./app2.css";

const $tab = $(".tab");
const $content = $(".app2 .tabContent");
$tab.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  $li.addClass("bkg").siblings().removeClass("bkg"); //样式与行为分离的方法
  $content
    .children()
    .eq(index) //找到相同下标的值
    .addClass("active") //添加上一个active属性，同时在css中填写这个属性的值    样式与行为分离
    .siblings()
    .removeClass("active"); //其他的兄弟姐妹减掉这个属性
});
