var character = document.getElementById('character');
var block = document.getElementById('block');

document.addEventListener('keypress', function(e){
    if(e.keyCode == 32){
        block.classList.add('animate');

	if (character.classList != "jump") {
	character.classList.add('jump');
	setTimeout(function(){
			character.classList.remove('jump');
		}, 500)
	}
    }
});

// -------------keyup-bug------------------
// document.body.onkeyup = function(e){
//     if(e.keyCode == 32){
//         block.classList.add('animate');

// 	if (character.classList != "jump") {
// 	character.classList.add('jump');
// 	setTimeout(function(){
// 			character.classList.remove('jump');
// 		}, 500)
// 	}
//     }
// }

var checkDead = setInterval(function(){
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if (blockLeft > 10 && blockLeft < 40 && characterTop >= 380) {
		block.style.animation = "none";
		alert("You Lost, Press Space To Continue")
		location.reload()

	}
}, 1)









