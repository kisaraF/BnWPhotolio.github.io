let body = document.getElementById('body');
let btn = document.getElementById('nightMode');
let footer = document.getElementById('footer');
let head = document.getElementById('head');
let payBtn = document.querySelector('#pay');
let priceText01 = document.querySelectorAll('.title')[0];
let priceText02 = document.querySelectorAll('.title')[1];
let priceText03 = document.querySelectorAll('.title')[2];
let nightText = document.getElementById('nightText');

btn.addEventListener('click' , changeBg);


function changeBg(){
	nightText.classList.toggle("darkTheme");
	body.classList.toggle("darkTheme");
	footer.classList.toggle("lightTheme");
	console.log(payBtn);
	payBtn.classList.toggle('lightTheme');
	priceText01.classList.toggle('lightTheme01');
	priceText02.classList.toggle('lightTheme01');
	priceText03.classList.toggle('lightTheme01');
}