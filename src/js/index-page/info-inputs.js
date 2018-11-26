import Typed from 'typed.js';

// параметры скрипта
const offsetReveal = 50; // отступ от счетчика в скроле при котором запускается анимация
const typeSpeed = 25; // скорость автонабора в инпутах
const name = 'Гончаров Тимофей';
const dob = '30.01.1995';
const city = 'Пятигорск';
const contacts = '+7 (989) 748 93 17';

export default ($window, resizeObserver, scrollRevealObserver) => {
	const $infoInputs = $('#infoInputs');
	const $inputInfoName = $('#infoName');
	const $inputInfoCity = $('#infoCity');
  const $inputInfoDob = $('#infoDob');
  const $inputInfoContacts = $('#infoContacts');
	let startAnimation = false;

	$inputInfoName.val('');
	$inputInfoCity.val('');
  $inputInfoContacts.val('');
  $inputInfoDob.val('');

	// тут eslint выключаю что бы сохранить последовательность элементов так же как в верстке
	// так легче воспринимать код
	const nameOptions = {
		strings: [name],
		typeSpeed,
		onComplete: () => new Typed('#infoDob', dobOptions), // eslint-disable-line
	};
	const dobOptions = {
		strings: [dob],
		typeSpeed,
		onComplete: () => new Typed('#infoCity', cityOptions), // eslint-disable-line
	};
	const cityOptions = {
		strings: [city],
		typeSpeed,
		onComplete: () => new Typed('#infoContacts', contactsOptions), // eslint-disable-line
	};
	const contactsOptions = {
		strings: [contacts],
		typeSpeed,
	};

	const startAutoFill = () => {
		if (!startAnimation) {
			startAnimation = true;
			// по документации нужно создавать экзепляр но eslint ругается (как правильно поступить не знаю)
			let typedName = new Typed('#infoName', nameOptions); // eslint-disable-line
		}
	};

	const checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $infoInputs, startAutoFill);

	resizeObserver.subscribe(checkOffset);
	scrollRevealObserver.subscribe(offsetReveal, $infoInputs, startAutoFill);
	checkOffset();
};
