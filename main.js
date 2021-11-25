var home = document.querySelector(".home");
var verticalLink = document.querySelectorAll(".vertical-links");
var i;

home.addEventListener('click', function(e){
    if(home.parentNode.classList.length == 1){
        for(i = 0; i < verticalLink.length; i ++){
            if(verticalLink[i].parentNode.classList.length > 1){
                verticalLink[i].parentNode.classList.remove("active");
                home.parentNode.classList.add("active");
            }
        }
    }
});