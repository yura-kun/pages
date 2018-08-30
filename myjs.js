window.onscroll = function() {myFunction()};

var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    };
    if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	} else {
	    header.classList.remove("sticky");
	};
}