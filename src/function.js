"use strict";

const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const userColor = document.querySelector("#userColor");
const title = document.querySelector("#coloredTitle");
title.style.color = "#ff0000";

let changeSpacing = (value) => {
  document.getElementById("imageDeadPool").style.padding = `${value}px`;
};

let changeBlur = (value) => {
  document.getElementById("imageDeadPool").style.filter = `blur(${value}px)`;
};

let changeBackground = (value) => {
  document.getElementById("imageDeadPool").style.backgroundColor = `${value}`;
  title.style.color = `${value}`;
};

spacing.addEventListener("input", function () {
  changeSpacing(spacing.value);
});

blur.addEventListener("input", function () {
  changeBlur(blur.value);
});

userColor.addEventListener("input", function () {
  changeBackground(userColor.value);
});
