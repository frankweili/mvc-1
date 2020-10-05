import $ from "jquery";
import "./app4.css";
const $circle = $(".app4 .circle");
$circle
  .on("mouseenter", () => {
    $circle.addClass("active");
  }) //鼠标进入的时候，进行这个操作
  .on("mouseleave", () => {
    $circle.removeClass("active");
  }); //鼠标离开的时候，进行这个操作
