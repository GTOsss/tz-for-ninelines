export function getRotationDegrees(obj) {
	let matrix = obj.css('-webkit-transform') ||
		obj.css('-moz-transform') || obj.css('-ms-transform') ||
		obj.css('-o-transform') || obj.css('transform');
	let angle;

	if (matrix !== 'none') {
		let values = matrix.split('(')[1].split(')')[0].split(',');
		let a = +values[0];
		let b = +values[1];

		angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
	} else {
		angle = 0;
	}

	return Math.round(angle + 90);
}
