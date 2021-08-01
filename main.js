let body = document.getElementById('body');
let btn = document.getElementById('nightMode');
let footer = document.getElementById('footer');
let head = document.getElementById('head');
let pay = document.getElementById('pay');
let priceText01 = document.querySelectorAll('.title')[0];
let priceText02 = document.querySelectorAll('.title')[1];
let priceText03 = document.querySelectorAll('.title')[2];
let nightText = document.getElementById('nightText');

btn.addEventListener('click' , changeBg);


function changeBg(){
	body.classList.toggle("darkTheme");
	footer.classList.toggle("lightTheme");
	priceText01.classList.toggle('lightTheme01');
	priceText02.classList.toggle('lightTheme01');
	priceText03.classList.toggle('lightTheme01');
	
	if(btn.classList.contains('hello')){
		btn.classList.remove('hello');
		btn.style.backgroundColor = "#000";
		btn.style.color = "#fff";
		btn.innerHTML = "Dark Mode";
	}else{
		btn.style.backgroundColor = "#c16b08";
		btn.style.color = "#fff";
		btn.className = "hello";
		btn.innerHTML = "Light Mode";
	}

	if(pay.classList.contains('hello')){
		pay.classList.remove('hello');
		pay.style.backgroundColor = "#000";
		pay.style.color = "#fff";
	}else{
		pay.style.backgroundColor = "#fff";
		pay.style.color = "#000";
		pay.className = "hello";
	}
}

