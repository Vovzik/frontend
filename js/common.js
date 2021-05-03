document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contacts__form');
	form.addEventListener('submit', formSend);

	async function formSend(event) {
		event.preventDefault();

		let error = formValidate(form);


		if (error === 0) {
				$.ajax({
					type: "POST",
					url: "php/post.php",
					data: $(this).serialize()
				}).done(function () { //Если все хорошо, показываем сообщение об отправки и очищаем поля
					$(".contacts__massage").addClass("active").css('display', 'flex').hide().fadeIn();
					setTimeout(function () {
						jQuery("#contacts__form").trigger("reset");
						$(".contacts__massage").removeClass('active').fadeOut();
					}, 3000);
				});
				return false;
		} 
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) { //Находим класс у обьекта если класс есть то воозращемт true и условие верно
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {  //Будем проверть наличие checkbox проверим на тип если это checkbox и если checked === false
				formAddError(input);
				error++;
			} else {
				if (input.value === '') { //Если input не заполнен то добавлетьс класс
					formAddError(input);
					error++;
				}
			}

		}

		return error;
	};


	function formAddError(input) {
		input.parentElement.classList.add('_error'); //Воозращает родител данного обьекта узла
		input.classList.add('_error');
	};


	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	};


	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});











document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formPopup);

	async function formPopup(event) {
		event.preventDefault();

		let error = formValidatePopup(form);


		if (error === 0) {
			$.ajax({
				type: "POST",
				url: "php/post.php",
				data: $(this).serialize()
			}).done(function () { //Если все хорошо, показываем сообщение об отправки и очищаем поля
				$(".contacts__massage").addClass("active").css('display', 'flex').hide().fadeIn();
				setTimeout(function () {
					jQuery("#form").trigger("reset");
					$(".contacts__massage").removeClass('active').fadeOut();
				}, 3000);
			});
			return false;
		}
	}

	function formValidatePopup(form) {
		let error = 0;
		let formReq = document.querySelector('._req1');


		console.log(formReq);
		formRemoveErrorPopup(formReq);

		if (formReq.value === '') { //Если input не заполнен то добавлетьс класс
					formAddErrorPopup(formReq);
					error++;
			}
	

		return error;
	};


	function formAddErrorPopup(input) {
		input.parentElement.classList.add('_error'); //Воозращает родител данного обьекта узла
		input.classList.add('_error');
	};


	function formRemoveErrorPopup(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	};


});



let section_blockformName = document.querySelectorAll('[type="name"]');
let section_blockformEmail = document.querySelector('[type="text"]');
let section_blockformMassage = document.querySelector('[name="massage"]');




let text_value = document.querySelectorAll('.text_value');



for (let i = 0; i < section_blockformName.length; i++) {
	section_blockformName[1].value = 'Имя';
	section_blockformName[0].value = 'Имя или название организации';

	section_blockformName[i].style.color = '#757575';
}


	section_blockformEmail.value = 'Электронная почта';
	section_blockformMassage.value = 'Сообщение';

	section_blockformEmail.style.color = '#757575';
  section_blockformMassage.style.color = '#757575';





for (let i = 0; i < text_value.length; i++) {
	text_value[i].addEventListener('click', () => {
		text_value[i].value = null;

		colorInput(text_value[i]);
	})
}



function colorInput (text_value) {
	text_value.style.color = '#424242';
}




	/*Маска для инпута*/
	var telInp = $('input[type="tel"]');
	
	telInp.each(function () {
		$(this).mask("+7 (999) 999-99-99");
	});













