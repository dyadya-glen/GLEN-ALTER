var constructorOpen = (function () {
  var mounts = document.querySelector(".constructor__mounts"),
      mountsItem = document.querySelectorAll(".constructor__mounts-item");

  mounts.addEventListener("click", function(event) {
    if(mounts.classList.contains("constructor__mounts--show")){
      mounts.classList.remove("constructor__mounts--show");
    }else {
      mounts.classList.add("constructor__mounts--show");
    }
  });

  for (var i = 0; i < mountsItem.length; i++) {
    mountsItem[i].addEventListener("click", function(event) {
      if(mounts.classList.contains("constructor__mounts--show")){
        mounts.classList.add("constructor__mounts--show");
      }else {
        mounts.classList.remove("constructor__mounts--show");
      }
    });
  }
}());
