for(let n=0;n<document.querySelectorAll("button").length;n++){
	document.querySelectorAll("button")[n].addEventListener("click",function (){
	let buttonInnerHtml = this.innerHTML;
	addAnimation(buttonInnerHtml);
	playSound(buttonInnerHtml);
});
}
document.addEventListener("keypress",function(event){
	addAnimation(event.key);
	playSound(event.key);
})
function playSound(key){
	switch(key){
		case("w"):
			let audio1 = new Audio('sounds/tom-1.mp3');
			audio1.play();
		break;

		case("a"):
			let audio2 = new Audio('sounds/tom-2.mp3');
			audio2.play();
		break;

		case("s"):
			let audio3 = new Audio('sounds/tom-3.mp3');
			audio3.play();
		break;

		case("d"):
			let audio4 = new Audio('sounds/tom-4.mp3');
			audio4.play();
		break;

		case("j"):
			let audio5 = new Audio('sounds/snare.mp3');
			audio5.play();
		break;

		case("k"):
			let audio6 = new Audio('sounds/crash.mp3');
			audio6.play();
		break;

		case("l"):
			let audio7 = new Audio('sounds/kick-bass.mp3');
			audio7.play();
		break;

		default: console.log(key);

	}
}
function addAnimation(currentKey){
		document.querySelector("." + currentKey).classList.add("pressed");
		setTimeout(function (){
			document.querySelector("." + currentKey).classList.remove("pressed");
		},200)
	}