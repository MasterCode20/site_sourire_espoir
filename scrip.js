function changeImage()
{
    var container = document.querySelector('.container');
    var currentImg = 
    container.querySelector('img:first-child');
    container.appendChild(currentImg);
}
setInterval(changeImage,2000);

$(document).ready(function(){
	$('.carousel').carousel();
});               