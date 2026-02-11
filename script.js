// Scroll Progress
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.querySelector(".progress-bar").style.width = progress + "%";
});

// Typing Animation
const text = "DevOps & Cloud Engineer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
document.querySelector(".typing-text").innerHTML = "";
typeEffect();
