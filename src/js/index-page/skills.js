// параметры скрипта
const checkboxes = [ // чекбоксы которые будут выбраны автоматически
	'html5',
	'css3',
	'БЭМ',
	'SCSS',
	'gulp',
	'webpack',
	'vanillaJS',
	'react',
	'redux',
	'jquery',
	'git',
	'git-flow',
];
const delaySelect = 150; // интервал между автовыбором чекбоксов
const delay = 2300; // задержка если элемент с самого начала в пределах видимости
const offsetReveal = 100; // отступ от блока skills в скроле при котором запускается анимация

export default ($window, resizeObserver, scrollRevealObserver) => {
	const $skillsBlock = $('#skills');
	let isStartAutoSelect = false;

	checkboxes.forEach((checkboxId) => $(`#${checkboxId}`).prop('checked', false));

	const startAutoSelect = () => {
		if (!isStartAutoSelect) {
			isStartAutoSelect = true;
			checkboxes.forEach((checkboxId, i) => {
				setTimeout(() => $(`#${checkboxId}`).click(), i * delaySelect);
			});
		}
	};

	const checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $skillsBlock, startAutoSelect);

	resizeObserver.subscribe(checkOffset);
	scrollRevealObserver.subscribe(offsetReveal, $skillsBlock, startAutoSelect);
	setTimeout(checkOffset, delay);
};
