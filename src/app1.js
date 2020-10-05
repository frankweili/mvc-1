import $ from "jquery";
import "./app1.css";
const $button1 = $(".add1");
const $button2 = $(".minus1");
const $button3 = $(".mul2");
const $button4 = $(".divide2");
const $number = $(".number");
const n = localStorage.getItem("n"); //初始化n
$number.text(n || 100); //把n写到里面去
$button1.on("click", () => {
  let n = parseInt($number.text()); //读取n，并转化为数字
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n); //把n放到number中
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;

  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
