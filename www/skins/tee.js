//Prime 2015-31
// Updated to be more realistic by Ryozuki on 2022-03-28.

function render(skin){
	//create canvas
	canvas = document.createElement("canvas");
	canvas.width = "96";
	canvas.height = "64";
	ctx = canvas.getContext("2d");

	ctx.drawImage(skin,192,64,64,32,8,32,64,30); //back feet shadow
	ctx.drawImage(skin,96,0,96,96,16,0,64,64); //body shadow
	ctx.drawImage(skin,192,64,64,32,24,32,64,30); //front feet shadow
	ctx.drawImage(skin,192,32,64,32,8,32,64,30); //back feet
	ctx.drawImage(skin,0,0,96,96,16,0,64,64); //body
	ctx.drawImage(skin,192,32,64,32,24,32,64,30); //front feet
	ctx.drawImage(skin,64,96,32,32,39,18,26,26); //left eye
	//right eye (flip and draw)
	ctx.save();
	ctx.scale(-1,1);
	ctx.drawImage(skin,64,96,32,32,-73,18,26,26);
	ctx.restore();
	//replace with image
	skin.parentNode.replaceChild(canvas,skin);
}

document.body.onload=function(){
	var images = document.querySelectorAll(".nowraptable img");
	for(i=0; i<images.length; i++){
		if(images[i].naturalHeight){
			render(images[i]);
		}
	}
}

