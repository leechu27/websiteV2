$( document ).ready(function() {
/*
var btnContainer = document.getElementById("nav-pages");
var pages = btnContainer.getElementsByTagName("A");
for (var i = 0; i < pages.length; i++) {
    if (pages[i].href == window.location.href) {
        pages[i].className += 'active';
    }
    pages[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}
*/

var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/repos/leechu27/websitev2";

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var result = JSON.parse(this.responseText);
    var lastUpdated = "Website last updated: " + result.updated_at.split('T')[0];
    document.getElementById("last-updated").innerHTML = lastUpdated;

}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
});
