var play = document.querySelector(".play");
var trailer = document.querySelector(".trailer");
var close = document.querySelector(".close");
var video = document.querySelector("video");
var contact = document.querySelector(".toggle");
var sci = document.querySelector(".sci");

play.addEventListener("click", () => {
	trailer.classList.toggle("active");
	video.currentTime = 0;
	video.pause();
})

close.addEventListener("click", () => {
	trailer.classList.toggle("active");
	video.currentTime = 0;
	video.pause();
});

contact.addEventListener("click", () => {
	sci.classList.toggle("active");
}) 



