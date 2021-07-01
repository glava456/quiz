document.addEventListener("DOMContentLoaded", function(event) { 
var input = document.getElementById('scene-input');
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene1');
var parallax = new Parallax(scene1, {
    hoverOnly: true,
    relativeInput: true,
    inputElement: input
});

});

