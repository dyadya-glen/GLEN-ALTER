//ВАЛИДАТОР ФОРМЫ
$(document).ready(function(){
  $(".question__form").validate({
  rules:{
    name:{
        required: true,
    },
    email:{
        required: true,
        email: true,
    },
  },
  messages:{
    userText:{
          required: "",
    },
    email:{
          required: "",
          email: "",
    },
  }
  });
  $(".popup__form--alter-s").validate({
  rules:{email:{required: true, email: true,},},
  messages:{emailAlterS:{required: "", email: "",},}
  });
  $(".popup__form--sirius").validate({
  rules:{email:{required: true, email: true,},},
  messages:{emailSirius:{required: "", email: "",},}
  });
  $(".popup__form--callback").validate({
  rules:{phone:{required: true,},},
  messages:{phone:{required: "",},}
  });
  $(".popup__form-telephone").mask("+ 7 (999) 999-99-99");
});

// Маска длчя ввода номера телефона
// (function ($) {
//   $(function () {
//     jQuery(document).ready(function () {
//       $("#callbackTel").mask("+ 7 (999) 999-99-99");
//     });
//   });
// })(jQuery);


//Меню шапки
var toggle = document.querySelector(".page-header__toglle"),
    menu = document.querySelector(".page-header__menu"),
    products = document.querySelector(".page-header__menu-item--products"),
    productsList = document.querySelector(".page-header__product-list"),
    length = document.querySelector(".page-header__length");

toggle.addEventListener("click", function(event) {
event.preventDefault();
productsList.classList.remove("page-header__product-list--show");
products.classList.remove("page-header__menu-item--products-show");

  if(menu.classList.contains("page-header__menu--show"),
    toggle.classList.contains("page-header__toglle--show"),
    length.classList.contains("page-header__length--show")){
    menu.classList.remove("page-header__menu--show");
    toggle.classList.remove("page-header__toglle--show");
    length.classList.remove("page-header__length--show")
  } else {
    menu.classList.add("page-header__menu--show");
    toggle.classList.add("page-header__toglle--show");
    length.classList.add("page-header__length--show")
  }
});

products.addEventListener("click", function(event) {
  event.preventDefault();
  if(products.classList.contains("page-header__menu-item--products-show"), productsList.classList.contains("page-header__product-list--show")){
    products.classList.remove("page-header__menu-item--products-show");
    productsList.classList.remove("page-header__product-list--show");
  } else {
    products.classList.add("page-header__menu-item--products-show");
    productsList.classList.add("page-header__product-list--show");
  }
});


//Popup Alter S , Cirius, callback
var popupBlackout = document.getElementById("popupBlackout"),
    popupAlterS = document.getElementById("popupAlterS"),
    alterSlink = document.getElementById("alterSlink"),
    siriuslink = document.getElementById("siriuslink"),
    callbackLink = document.getElementById("callbackLink"),
    contentAlterS = document.querySelector(".popup__content--alter-s"),
    contentSirius = document.querySelector(".popup__content--sirius"),
    callback = document.querySelector(".popup__content--callback"),
    mainPage = document.querySelector(".main-page");

var stopPropagation = function(e) {
  e.addEventListener("click", function(event) {
    event.stopPropagation();
  });
}

if(!callbackLink && !callback){
  stopPropagation(contentAlterS);
  stopPropagation(contentSirius);

  var clickPopup = function (a, b, c, d) {
    a.addEventListener("click", function(event) {
      event.preventDefault();
      b.style.display = 'block';
      c.style.display = 'none';
      e.classList.add("lock-page");
    });
  }

  clickPopup(alterSlink, popupBlackout, contentSirius, mainPage);
  clickPopup(siriuslink, popupBlackout, contentAlterS, mainPage);

  popupBlackout.addEventListener("click", function(event) {
    event.preventDefault();
    contentAlterS.style.display = 'inline-block';
    contentSirius.style.display = 'inline-block';
    popupBlackout.style.display = 'none';
    mainPage.classList.remove("lock-page");
  });

}else {
  stopPropagation(contentAlterS);
  stopPropagation(contentSirius);
  stopPropagation(callback);

  var clickPopup = function (a, b, c, d, e) {
    a.addEventListener("click", function(event) {
      event.preventDefault();
      b.style.display = 'block';
      c.style.display = 'none';
      d.style.display = 'none';
      e.classList.add("lock-page");
    });
  }

  clickPopup(alterSlink, popupBlackout, contentSirius, callback, mainPage);
  clickPopup(siriuslink, popupBlackout, contentAlterS, callback, mainPage);
  clickPopup(callbackLink, popupBlackout, contentAlterS, contentSirius, mainPage);

  popupBlackout.addEventListener("click", function(event) {
    event.preventDefault();
    contentAlterS.style.display = 'inline-block';
    contentSirius.style.display = 'inline-block';
    callback.style.display = 'inline-block';
    popupBlackout.style.display = 'none';
    mainPage.classList.remove("lock-page");
  });
}


/*СЛАЙДЕР-КАРУСЕЛЬ-ВЕРХНИЙ*/
$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
  items : 1,
  loop : true,
  //margin : 1000,
  //autoWidth : true,
  //nav : true,
  //navRewind : false,
  //navText : ['>','<img src="img/logo.svg" width="123" alt="ALTER">'],
  //slideBy : 5,
  //dots : true,
  //dotsEach : true,
  //dotData : true,
  autoplay : true,
  autoplayTimeout : 3500,
  autoplayHoverPause : true,
  smartSpeed :500,
  //navContainer : false,
  //dotsContainer : false,
  animateOut: 'fadeOut',
  //animateIn: 'fadeIn'
  });
});
