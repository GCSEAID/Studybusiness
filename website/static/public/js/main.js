Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0).forEach((function(r){r.addEventListener("click",(function(){var e=document.getElementById(r.dataset.target);r.classList.toggle("is-active"),e.classList.toggle("is-active")}))}));