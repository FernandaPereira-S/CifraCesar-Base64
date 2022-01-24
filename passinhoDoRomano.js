var chave = document.getElementById('chave');
var opcao = document.getElementById('opcao');
opcao.addEventListener('click', function() {
    if(opcao.value == 'cesar') { 
        chave.style.display='flex';
    } else {        
        chave.style.display ='none';
    }
});

var botao = document.getElementById('botao');
botao.addEventListener('click', function() {
    var inputRadio = document.getElementsByName('check');
    if(inputRadio[0].checked == true && opcao.value == 'cesar') {
        cesarCode();            
    } else if(inputRadio[1].checked == true && opcao.value == 'cesar') {
        cesarDecode();
    } else if(inputRadio[0].checked == true && opcao.value == 'base64') {
        baseCode();
    } else if(inputRadio[1].checked == true && opcao.value == 'base64') {
        baseDecode();
    }
});

function cesarCode() {     
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var texto = document.getElementById('texto').value.toLowerCase();
    var chave = document.getElementById('chave').value;
    var x = parseInt(chave);
    var resultado = ''; 

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] != ' ') {
            for(var j = 0; j < alfabeto.length; j++) {
                if(texto[i] == alfabeto[j]) {
                    resultado += alfabeto[(j + x) % alfabeto.length];
                }
            }
        } else { 
            resultado += ' ';
        }
    }  
    document.getElementById('resultado').innerText = `${resultado}`;
}

function cesarDecode() {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var texto = document.getElementById('texto').value.toLowerCase();
    var chave = document.getElementById('chave').value;
    var x = parseInt(chave);
    var resultado = ''; 
    var c = alfabeto.length - (x % alfabeto.length);

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] != ' ') {
            for(var j = 0; j < alfabeto.length; j++) {
                if(texto[i] == alfabeto[j]) {
                    resultado += alfabeto[(j + c) % alfabeto.length];
                }   
            }            
        } else {
            resultado += ' '; 
        }
    } 
    document.getElementById('resultado').innerText = `${resultado}`;
}

function baseCode() {
    var texto = document.getElementById('texto').value;
    var resultado = btoa(texto);
    document.getElementById('resultado').innerText = `${resultado}`;
}
    
function baseDecode() {
    var texto = document.getElementById('texto').value;
    var resultado = atob(texto);
    document.getElementById('resultado').innerText = `${resultado}`;
}
