let check1 = Boolean(false);
let check2 = Boolean(false);
let check3 = Boolean(false);


const testbtn = document.querySelector('#tester1');


testbtn.addEventListener('click',()=>{
	
	
	if(testbtn.textContent === 'text'){
		testbtn.textContent = '成功!';
		document.querySelector('#btn2').textContent = `JavaScript`;
	}
	else{
		testbtn.textContent = 'text';
	}
});

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');



btn1.addEventListener('click',()=>{
	if(check1 === false){
		check1 = true;
		check2 = false;
		check3 = false;
		document.querySelector('#texthere').textContent = 'text1';
	}
});

btn2.addEventListener('click',()=>{
	if(check2 === false){
		check1 = false;
		check2 = true;
		check3 = false;
		document.querySelector('#texthere').textContent = 'text2';
	}
});

btn3.addEventListener('click',()=>{
	if(check3 === false){
		check1 = false;
		check2 = false;
		check3 = true;
		document.querySelector('#texthere').textContent = 'text3';
	}
});

