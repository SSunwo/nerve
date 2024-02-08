window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    setTimeout(10);
  } else {
    document.getElementById("navbar").style.backgroundColor = "#94B4D5";
  }
}