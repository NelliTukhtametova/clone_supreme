
let data = document.querySelector('.data');
let body = document.querySelector('body');

setTimeout(() => body.className += ' visible', 200);
setInterval(() => {
	let options = { timeZone: 'Europe/Moscow', hour: '2-digit', minute:'2-digit' };
	data.innerHTML = ` ${new Date().toLocaleDateString().replace(/[\.\/]/g,'/')}  ${new Date().toLocaleTimeString('en-US',options).replace(/\s/g, '').toLowerCase()}  MOS`;
}, 100);

function noselect() {return false};
body.ondragstart = noselect;
body.onselectstart = noselect;
body.oncontextmenu = noselect;





