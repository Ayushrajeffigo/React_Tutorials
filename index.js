document.addEventListener('DOMContentLoaded', function() {
    var a = Math.floor(Math.random()*6 + 1);
    var b = Math.floor(Math.random()*6 + 1);
    if (a==7 || b==7) {
      a = 6;
      b = 6;

    }
    document.querySelectorAll("img")[0].setAttribute("src","images/dice"+a+".png");
    document.querySelectorAll("img")[1].setAttribute("src","images/dice"+b+".png");
  });