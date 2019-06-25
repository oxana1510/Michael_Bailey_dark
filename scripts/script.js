$(document).ready(function () {

var open = document.querySelector("#mobMenu");
var link = document.querySelector(".top-menu");
var close = document.querySelector(".mobail-menu-close");
var mobclose = document.querySelectorAll(".top-menu ul > li");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
});


 for (var i = 0; i < mobclose.length; i++) {

mobclose[i].addEventListener("click", function () { 
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
});
};
});
 

$(document).ready(function($){
 
  var nav = $(".top-menu");
  $(window).scroll(function () {
    if (window.pageYOffset > 135) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  }); 
});





$(document).ready(function(){

// Cache selectors
var lastId,
 topMenu = $("#top-menu"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll( function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
 
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop || jQuery(window).scrollTop()+jQuery(window).height()>=jQuery(document).height())
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }   

});

});

