

// Navbar

$("nav.navbar li.navItem").mouseover(function(){
	$(this).css("background-color", "#F3DE2B");
});

$("nav.navbar li.navItem").mouseout(function(){
	$(this).css("background-color", "white");
});






// Videos

var videos = ['https://www.youtube.com/embed/ktfsoB0vC9U', 'https://www.youtube.com/embed/vA0psRCwiI4', 'https://www.youtube.com/embed/_6VULenfuyU', 'https://www.youtube.com/embed/7jVnpDVY57Y'];
var comprimentoArray = videos.length;
var videoAtual = 0;

function prevVideo(){
	if(videoAtual==0){
		document.getElementById("videoIframe").src = videos[comprimentoArray-1];
		videoAtual = comprimentoArray-1;
	}
	else{
		document.getElementById("videoIframe").src = videos[videoAtual-1];
		videoAtual = videoAtual-1;
	}
}

function nextVideo(){
	if(videoAtual==comprimentoArray-1){
		document.getElementById("videoIframe").src = videos[0];
		videoAtual = 0;
	}
	else{
		document.getElementById("videoIframe").src = videos[videoAtual+1];
		videoAtual = videoAtual+1;
	}
}




// Scroll to top

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});




 // Navbar fixed após scroll

 $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 75) {
        document.getElementById('navbar').classList.remove('navbar');
        document.getElementById('navbar').classList.add('navbarFixed');
    } else {
    	document.getElementById('navbar').classList.remove('navbarFixed');
        document.getElementById('navbar').classList.add('navbar');
    }
});



// Clock


function settingClock() {
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        
  
        if(hour < 10) {
                hour = "0" + hour; 
        } 
        if (minute < 10) {
                minute = "0" + minute;
        }
        if (second < 10) {
                second = "0" + second;
        }

  
        var frame = document.getElementById("box");
        frame.innerHTML = hour + ":" + minute + ":" + second;    
}

setInterval(settingClock, 500);



// Calculadora

var number;
var number2;
var tipoConta;
var resultado;

function numberCalc(character){

	if(number!=null){
		number = number+""+character;
	}
	else{
		number = character;
	}
	

	document.getElementById("inputCalc").value = number;
}

function limparCalc(){
	number = null;
	number2 = null;
	tipoConta = null;
	resultado = null;

	document.getElementById("inputCalc").value = "";

}

function tipoCalc(tipo){
	if(tipoConta==null && number2!=null || number!=null){
		
			if(number!=null && number2!=null){
				Calcular();
				tipoConta = tipo;
				return;
			}
			if(number2!=null && number==null){
				tipoConta = tipo;
				number = null;
				document.getElementById("inputCalc").value = "";
				return;
			}
			else{
				tipoConta = tipo;
				number2 = number;
				number = null;
				document.getElementById("inputCalc").value = "";
				return;
			}

	}
	else{
		if(tipoConta!=null){
			alert("Nao pode selecionar mais do que um tipo de conta (*, /, +, -).");
		}
		else{
			alert("Tem que selecionar um numero antes do tipo de conta (*, /, +, -).");
		}
	}
	


}


function Calcular(){

	if(number!=null && number2!=null){
		switch(tipoConta){
			case "*": 
			resultado = number2 * number;
			break;
			case "/": 
			resultado = number2 / number;
			break;
			case "+": 
			resultado = number2 + number;
			break;
			default: 
			resultado = number2 - number;
		}
		
		document.getElementById("inputCalc").value = resultado;
		number2 = resultado;
		number = null;
		tipoConta = null;
	}

}





// Pedra Papel Tesoura
var jogadaPC;
var vitorias = 0;
var derrotas = 0;
var empates = 0;

function ppt(jogada){

	jogadaPC = Math.floor(Math.random() * 3) + 1;

	if(jogada==jogadaPC){
		//empate
		document.getElementById("GanhouPerdeu").innerHTML = "Empate";
		empates++;

		switch(jogada){
			case 1:
			document.getElementById("suaJogada").innerHTML = "&#x270A";
			document.getElementById("jogadaPC").innerHTML = "&#x270A";
			break;
			case 2:
			document.getElementById("suaJogada").innerHTML = "&#x270B";
			document.getElementById("jogadaPC").innerHTML = "&#x270B";
			break;
			default:
			document.getElementById("suaJogada").innerHTML = "&#x270C";
			document.getElementById("jogadaPC").innerHTML = "&#x270C";
		}
	}

	if(jogada == 1 && jogadaPC == 2){
		//pc ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Perdeu";
		document.getElementById("suaJogada").innerHTML = "&#x270A";
		document.getElementById("jogadaPC").innerHTML = "&#x270B";
		derrotas++;
	}

	if(jogada == 2 &&  jogadaPC == 1){
		//user ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Ganhou";
		document.getElementById("suaJogada").innerHTML = "&#x270B";
		document.getElementById("jogadaPC").innerHTML = "&#x270A";
		vitorias++;
	}

	if(jogada == 1 && jogadaPC == 3){
		//user ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Ganhou";
		document.getElementById("suaJogada").innerHTML = "&#x270A";
		document.getElementById("jogadaPC").innerHTML = "&#x270C";
		vitorias++;
	}

	if(jogada == 3 && jogadaPC == 1){
		//pc ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Perdeu";
		document.getElementById("suaJogada").innerHTML = "&#x270C";
		document.getElementById("jogadaPC").innerHTML = "&#x270A";
		derrotas++;
	}

	if(jogada == 2 && jogadaPC == 3){
		//pc ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Perdeu";
		document.getElementById("suaJogada").innerHTML = "&#x270B";
		document.getElementById("jogadaPC").innerHTML = "&#x270C";
		derrotas++;
	}

	if(jogada == 3 && jogadaPC == 2){
		//user ganha
		document.getElementById("GanhouPerdeu").innerHTML = "Ganhou";
		document.getElementById("suaJogada").innerHTML = "&#x270C";
		document.getElementById("jogadaPC").innerHTML = "&#x270B";
		vitorias++;
	}

	// ✊&#x270A✋&#x270B✌&#x270C

	document.getElementById("GanhouPerdeuEmpatou").innerHTML = "Ganhou: "+vitorias+" Empatou: "+empates+" Perdeu: "+derrotas;
	

	$("#divJogoPPT").fadeIn( "slow");



}





// 4 em linha

var linha4 = [
			["grey","grey","grey","grey","grey","grey","grey"],
			["grey","grey","grey","grey","grey","grey","grey"],
			["grey","grey","grey","grey","grey","grey","grey"],
			["grey","grey","grey","grey","grey","grey","grey"],
			["grey","grey","grey","grey","grey","grey","grey"],
			["grey","grey","grey","grey","grey","grey","grey"]
];

var vezJogador = 1;
var i;
var j;
var pos4Linha;
var vitoriasJ1 = 0;
var vitoriasJ2 = 0;
var ganhou4Linha = false;
var jogadas4Linha = 0;
var elementsTableClass;

function linha(ln){

		for(i=5;i>=0;i--){

			if(linha4[i][ln] == "grey"){

					pos4Linha = "["+i+"]["+ln+"]";

					if(vezJogador==1){
						 document.getElementById(pos4Linha).style.backgroundColor = "red";
						 linha4[i][ln] = "red";
						 vezJogador = 2;
						 document.getElementById("vezJogador4Linha").innerHTML = "Vez do Jogador: 2";
						 break;
					}
					else{
						 document.getElementById(pos4Linha).style.backgroundColor = "blue";
						 linha4[i][ln] = "blue";
						 vezJogador = 1;
						 document.getElementById("vezJogador4Linha").innerHTML = "Vez do Jogador: 1";
						 break;
					}
			}
			
		}


		verificaGanhou();

}

function verificaGanhou(){
		jogadas4Linha++;

		for(i=0; i<6; i++){
			for(j=0; j<4; j++){

				if(linha4[i][j]!="grey" && linha4[i][j] == linha4[i][j+1] && linha4[i][j] == linha4[i][j+2] && linha4[i][j] == linha4[i][j+3]){
					if(linha4[i][j] == "red"){
						//jogador1
						vitoriasJ1++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 1";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
					else{
						// jogador2
						vitoriasJ2++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 2";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
				}
			}
		}

		for(i=0; i<3; i++){
			for(j=0; j<7; j++){

				if(linha4[i][j]!="grey" && linha4[i][j] == linha4[i+1][j] && linha4[i][j] == linha4[i+2][j] && linha4[i][j] == linha4[i+3][j]){
					if(linha4[i][j] == "red"){
						//jogador1
						vitoriasJ1++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 1";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
					else{
						// jogador2
						vitoriasJ2++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 2";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
				}
			}
		}


		for(i=2; i>=0; i--){
			for(j=0; j<4; j++){
				if(linha4[i][j] == linha4[i+1][j+1] && linha4[i][j] == linha4[i+2][j+2] && linha4[i][j] == linha4[i+3][j+3] && linha4[i][j]!="grey"){
					if(linha4[i][j] == "red"){
						//jogador1
						vitoriasJ1++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 1";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
					else{
						// jogador2
						vitoriasJ2++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 2";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
				}
			}
		}

		for(i=5; i>=3; i--){
			for(j=3; j>=0; j--){
				if(linha4[i][j]!="grey" && linha4[i][j] == linha4[i-1][j+1] && linha4[i][j] == linha4[i-2][j+2] && linha4[i][j] == linha4[i-3][j+3]){
					if(linha4[i][j] == "red"){
						//jogador1
						vitoriasJ1++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 1";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
					else{
						// jogador2
						vitoriasJ2++;
						document.getElementById("GanhouJogador4Linha").innerHTML = "Ganhou o Jogador 2";
						document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
						ganhou4Linha = true;
					}
				}
			}
		}


		if(ganhou4Linha == true){
			$("#divJogo4Linha").fadeIn( "slow");
			linha4 = [
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"]
			];
			vezJogador = 1;



			ganhou4Linha = false;
			jogadas4Linha = 0;

			elementsTableClass = document.getElementsByClassName('table4Linha');
			
			for(i = 0; i < elementsTableClass.length; i++){
					elementsTableClass[i].style.backgroundColor = "grey";
			}

			document.getElementById("vezJogador4Linha").innerHTML = "Vez do Jogador: 1";
		}

		if(jogadas4Linha == 42 && ganhou4Linha == false){
			document.getElementById("GanhouJogador4Linha").innerHTML = "Empate";
			document.getElementById("Ganhou1Ganhou2").innerHTML = "Jogador 1: "+vitoriasJ1+" Jogador 2: "+vitoriasJ2;
			$("#divJogo4Linha").fadeIn( "slow");

			linha4 = [
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"],
				["grey","grey","grey","grey","grey","grey","grey"]
			];
			vezJogador = 1;
			jogadas4Linha = 0;

			elementsTableClass = document.getElementsByClassName('table4Linha');

			for(i = 0; i < elementsTableClass.length; i++){
					elementsTableClass[i].style.backgroundColor = "grey";
			}

			document.getElementById("vezJogador4Linha").innerHTML = "Vez do Jogador: 1";
		}


}