let body = document.getElementById('body');
let btn = document.getElementById('nightMode');
let footer = document.getElementById('footer');
let header1 = document.querySelectorAll('#head')[0];
let header2 = document.querySelectorAll('#head')[1];
let header3 = document.querySelectorAll('#head')[2];

function dark(){
	body.classList.toggle("darkTheme");
	header1.classList.toggle("darkTheme");
	header2.classList.toggle("darkTheme");
	header3.classList.toggle("darkTheme");
	footer.classList.toggle("lightTheme");
	btn.classList.toggle("Btn");
}

function changeBg(){
	dark()
}
