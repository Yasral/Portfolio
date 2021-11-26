var verticalNav = document.querySelectorAll(".vertical-nav-link");
var activeClass = document.getElementsByClassName("active");

for (var i = 0; i < verticalNav.length; i++){
    verticalNav[i].addEventListener('click', function(e){ 
        activeClass[0].classList.remove('active');
        e.currentTarget.parentNode.classList.add('active');
    });
}