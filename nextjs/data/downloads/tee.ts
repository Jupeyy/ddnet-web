//Prime 2015-31
// Updated to be more realistic by Ryozuki on 2022-03-28.

export enum EEyesEmote {
	EMOTE_NORMAL,
	EMOTE_PAIN,
	EMOTE_HAPPY,
	EMOTE_SURPRISE,
	EMOTE_ANGRY,
	EMOTE_BLINK,
	NUM_EMOTES,
}

// prettier-ignore
function renderSkin(this: HTMLCanvasElement, skin: HTMLImageElement, eyesEmote: EEyesEmote, eyesDir: number[]) 
{
	//create canvas
	// viewport size
	this.width = 72;
	this.height = 72;
	const ctx = this.getContext("2d");

	// general params, 64 is our target size
	const targetWidth = 64;
	const targetHeight = 64;
	const scaleX = targetWidth / 96;
	const scaleY = targetHeight / 96;

	const canvasMidX = this.width / 2;
	const canvasMidY = this.height / 2 + 6; // some offset bcs teeworlds skins are not perfectly mid

	// feet calc
	const feetDown = (10 / 64) * targetHeight;
	const feetLeft = -(7 / 64) * targetWidth;
	const feetRight = (7 / 64) * targetWidth;
	const feetWidth = 64 * 1.5 * scaleX;
	const feetHeight = 32 * 1.5 * scaleY;
	const feetY = canvasMidY + feetDown - feetHeight / 2;
	const feetXLeft = canvasMidX + feetLeft - feetWidth / 2;
	const feetXRight = canvasMidX + feetRight - feetWidth / 2;

	// body calc
	const bodyUp = -(4 / 64) * targetHeight;
	const bodyWidth = 96 * scaleX;
	const bodyHeight = 96 * scaleX;
	const bodyX = canvasMidX - bodyWidth / 2;
	const bodyY = canvasMidY - bodyHeight / 2 + bodyUp;

	// eyes
	let eyesScale = 1.2;
	if(eyesEmote == EEyesEmote.EMOTE_BLINK)
		eyesScale = 0.45;
	const eyeSeperation = (0.075 - 0.010 * Math.abs(eyesDir[0])) * targetWidth;
	const eyesOffset = [(eyesDir[0] * 0.125) * targetWidth, (-0.05 + (-eyesDir[1]) * 0.10) * targetHeight];
	const eyesWidth = 32 * eyesScale * scaleX;
	const eyesHeight = 32 * eyesScale * scaleY;
	const eyesXLeft = (bodyX + bodyWidth / 2) - eyeSeperation + eyesOffset[0] - eyesWidth / 2;
	const eyesXRight = -(bodyX + bodyWidth / 2) - eyeSeperation - eyesOffset[0] - eyesWidth / 2;
	const eyesY = (bodyY + bodyHeight / 2) + eyesOffset[1] - eyesHeight / 2;

	let sourceEyeX = 64;
	let sourceEyeY = 96;
	let sourceEyeWidth = 32;
	let sourceEyeHeight = 32;
	switch(eyesEmote) {
		case EEyesEmote.EMOTE_BLINK:
			// fallthrough
		case EEyesEmote.EMOTE_NORMAL: {
			sourceEyeX = 64;
			sourceEyeY = 96;
		}
		break;
		case EEyesEmote.EMOTE_ANGRY: {
			sourceEyeX = 96;
			sourceEyeY = 96;
		}
		break;
		case EEyesEmote.EMOTE_PAIN: {
			sourceEyeX = 128;
			sourceEyeY = 96;
		}
		break;
		case EEyesEmote.EMOTE_HAPPY: {
			sourceEyeX = 160;
			sourceEyeY = 96;
		}
		break;
		case EEyesEmote.EMOTE_SURPRISE: {
			sourceEyeX = 192;
			sourceEyeY = 96;
		}
		break;
	}
	
	// img properties
	const imgScaleX = skin.width / 256;
	const imgScaleY = skin.height / 128;
	sourceEyeX *= imgScaleX;
	sourceEyeY *= imgScaleY;
	sourceEyeWidth *= imgScaleX;
	sourceEyeHeight *= imgScaleY;

	const sourceShadowFeetX = 192 * imgScaleX;
	const sourceShadowFeetY = 64 * imgScaleY;
	const sourceFrontFeetX = 192 * imgScaleX;
	const sourceFrontFeetY = 32 * imgScaleY;
	const sourceFeetWidth = 64 * imgScaleX;
	const sourceFeetHeight = 32 * imgScaleY;

	const sourceShadowBodyX = 96 * imgScaleX;
	const sourceShadowBodyY = 0 * imgScaleY;
	const sourceFrontBodyX = 0 * imgScaleX;
	const sourceFrontBodyY = 0 * imgScaleY;
	const sourceBodyWidth = 96 * imgScaleX;
	const sourceBodyHeight = 96 * imgScaleY;
	
	ctx.drawImage(skin, sourceShadowFeetX, sourceShadowFeetY, sourceFeetWidth, sourceFeetHeight, feetXLeft, feetY, feetWidth, feetHeight); // left (back) feet shadow
	ctx.drawImage(skin, sourceShadowBodyX, sourceShadowBodyY, sourceBodyWidth, sourceBodyHeight, bodyX, bodyY, bodyWidth, bodyHeight); // body shadow
	ctx.drawImage(skin, sourceShadowFeetX, sourceShadowFeetY, sourceFeetWidth, sourceFeetHeight, feetXRight, feetY, feetWidth, feetHeight); // right (front) feet shadow
	ctx.drawImage(skin, sourceFrontFeetX, sourceFrontFeetY, sourceFeetWidth, sourceFeetHeight, feetXLeft, feetY, feetWidth, feetHeight); // left (back) feet
	ctx.drawImage(skin, sourceFrontBodyX, sourceFrontBodyY, sourceBodyWidth, sourceBodyHeight, bodyX, bodyY, bodyWidth, bodyHeight); // body
	ctx.drawImage(skin, sourceFrontFeetX, sourceFrontFeetY, sourceFeetWidth, sourceFeetHeight, feetXRight, feetY, feetWidth, feetHeight); // right (front) feet
	ctx.drawImage(skin, sourceEyeX, sourceEyeY, sourceEyeWidth, sourceEyeHeight, eyesXLeft, eyesY, eyesWidth, eyesHeight); // left eye
	ctx.save();
	ctx.scale(-1, 1);
	ctx.drawImage(skin, sourceEyeX, sourceEyeY, sourceEyeWidth, sourceEyeHeight, eyesXRight , eyesY, eyesWidth, eyesHeight);
	ctx.restore();
}

export function onTeeSkinRender(
	skinCanvas: HTMLCanvasElement,
	skinImg: HTMLImageElement,
	eyesEmote: EEyesEmote,
	eyesDir: number[]
) {
	if (skinImg.naturalHeight) {
		renderSkin.call(skinCanvas, skinImg, eyesEmote, eyesDir);
	}
}
