const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 12;

function goResult(){
	
}

//답변 버튼 이벤트
function addAnswer(answerText,qIdx) {
	var a = document.querySelector(".answerBox");
	var answer = document.createElement("button");
	answer.classList.add("answerList");
	answer.classList.add("my-2");
	answer.classList.add("py-2");
	answer.classList.add("mx-auto");
	answer.classList.add("fadein");
	
	a.appendChild(answer);
	answer.innerHTML = answerText;
	
	answer.addEventListener("click",function(){
		var ch = document.querySelectorAll(".answerList");
		for(let i=0; i <ch.length; i++){
			ch[i].disabled = true;
			ch[i].style.WebkitAnimation = "fadeout 1=0.5s";
			ch[i].style.animation = "fadeout 0.5s";
			
		}
		setTimeout(()=>{
			
			for(let i=0; i <ch.length; i++){
				ch[i].style.display = 'none';
			}
			goNext(++qIdx);
		},450)
	},false);
}

//질문 넣기
function goNext(qIdx) {
	if(++qIdx === endPoint){
		goResult();
	}
	var q = document.querySelector(".qBox");
	q.innerHTML = qnaList[qIdx].q;
	for(let i in qnaList[qIdx].a){
		addAnswer(qnaList[qIdx].a[i].answer,qIdx);
	}
	var sts = document.querySelector(".stsBar");
	sts.style.width = (100/endPoint)*(qIdx+1)+'%';
}

//시작하기 버튼 이벤트
function begin(){
	
	main.style.WebkitAnimation = "fadeout 1s";
	main.style.animation = "fadeout 1s";
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadein 1s";
		qna.style.animation = "fadein 1s";
		setTimeout(() => {
			main.style.display = "none";
			qna.style.display = "block";
		},450)
		let qIdx = 0;
		goNext(qIdx);
	},450);
}
