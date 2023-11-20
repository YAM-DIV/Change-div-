// Start Section Click
let btn_diva = document.getElementById("btn_diva");
let btn_divb = document.getElementById("btn_divb");
let diva = document.getElementById("diva");
let divb = document.getElementById("divb");
btn_diva.addEventListener('click', ()=>{
	diva.style.display='block';
	divb.style.display='none';
});
btn_divb.addEventListener('click', ()=>{
	diva.style.display='none';
	divb.style.display='block';
});
// End Section Click