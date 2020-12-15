var button = document.querySelector('.header__menu-bars');
var menuList = document.querySelector('.header__menu-list');
button.addEventListener('click',function(){
    menuList.classList.toggle('show')
})

// ----------Scroll-----------------
function functionScroll() {
    var section = document.querySelectorAll(".section");
    (sections = {}), (i = 0);
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });
    
    for (let i in sections) {
   
      if (sections[i] <= window.pageYOffset + 80) {
        document.querySelector(".appear").classList.remove("appear");
        document.querySelector("a[href*=" + i + "]").classList.add("appear");
        
      }
    }
}
window.addEventListener("scroll", functionScroll);
window.addEventListener("resize", functionScroll);
//**================== 3, Sticky Menu ==================== **//
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").classList.add("record");
  } else {
    document.querySelector(".header").classList.remove("record");
  }
}
//**================== 4, Back to top ==================== **//
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});