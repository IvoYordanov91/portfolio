var w = window.innerWidth;

function menuToggle() {
    var links = document.getElementsByClassName("header_nav-ul-li");
    for (var i=0; i<links.length;i++){
        if (links[i].style.display === "block" && w < 800) {
            links[i].style.display = "none";
          } else {
            links[i].style.display = "block";
          }
    }
  }