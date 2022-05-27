$('document').ready(function () {
    $('#one').click(function(){
        document.calculadora.expressao.value += 1;
    });
    $('#two').click(function(){
        document.calculadora.expressao.value += 2;
    });
    $('#three').click(function(){
        document.calculadora.expressao.value += 3;
    });
    $('#four').click(function(){
        document.calculadora.expressao.value += 4;
    });
    $('#five').click(function(){
        document.calculadora.expressao.value += 5;
    });
    $('#six').click(function(){
        document.calculadora.expressao.value += 6;
    });
    $('#seven').click(function(){
        document.calculadora.expressao.value += 7;
    });
    $('#eight').click(function(){
        document.calculadora.expressao.value += 8;
    });
    $('#nine').click(function(){
        document.calculadora.expressao.value += 9;
    });
    $('#zero').click(function(){
        document.calculadora.expressao.value += 0;
    });
    $('#par1').click(function(){
        document.calculadora.expressao.value += '(';
    });
    $('#par2').click(function(){
        document.calculadora.expressao.value += ')';
    });
    $('#mult').click(function(){
        document.calculadora.expressao.value += 'x';
    });
    $('#menus').click(function(){
        document.calculadora.expressao.value += '-';
    });
    $('#plus').click(function(){
        document.calculadora.expressao.value += '+';
    });
    $('#comma').click(function(){
        document.calculadora.expressao.value += ',';
    });
    $('#dash').click(function(){
        document.calculadora.expressao.value += '/';
    });
    $('#equal').click(function(){ 
        if(expressao.value == ""){
            alert("porfavor digite algum número");
        }else{
            console.log(document.calculadora.expressao.value);
            document.calculadora.expressao = 
            eval(document.calculadora.expressao);
            
        }
    });
    $('#del').click(function(){
        document.calculadora.expressao.value = "";
    });
}) 