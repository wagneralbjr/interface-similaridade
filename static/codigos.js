var aba_tabela = 0;


$(function(){
    let table = $('#tab_principal > tbody').children();
    $(table[0]).addClass('realca');


    let table2 = $('#tab_secundaria > tbody').children();
    $(table2[0]).addClass('realca');

    }
)
//Muda a classe ativa;
function mudaAtiva(ativo, proximo_aux, id_tabela){
    
    //remove da classe ativa.
    
    let table = $('#'+ id_tabela +' > tbody').children();
    $(table[ativo - 1]).removeClass('realca');

    //pega o tamanho da lista.
    let tam_lista = Number($('#'+ id_tabela + ' > tbody').children().length);

    proximo = (proximo_aux - 1) % tam_lista;
    
    //recuou para atrás na lista
    if(proximo == -1)
    {
        proximo = tam_lista - 1;
    }
    $(table[proximo]).addClass('realca');

}

$(document).keypress(function(event) {


    console.log('Handler for .keypress() called. - ' + event.charCode);
    let codigoLetra = event.charCode;
    //encontra qual está ativo.

    let index_ativo_1 = Number($("#tab_principal > tbody > .realca").children()[0].innerHTML);

    let index_ativo_2 = Number($("#tab_secundaria > tbody > .realca").children()[0].innerHTML);

    //w 115
    if (codigoLetra == 115){
       //console.log('apertou');

        if(!aba_tabela)
            mudaAtiva(index_ativo_1, index_ativo_1 + 1,'tab_principal');
        else
            mudaAtiva(index_ativo_2 ,index_ativo_2 +1,'tab_secundaria');
    }
    //S 119
    if (codigoLetra == 119){
        //console.log('apertou');
        
        if(!aba_tabela)
            mudaAtiva(index_ativo_1, index_ativo_1 - 1,'tab_principal');
        else
            mudaAtiva(index_ativo_2, index_ativo_2 - 1,'tab_secundaria');
        
    }
    //D 100    
    if (codigoLetra == 100 ){
        aba_tabela = (aba_tabela+1)%2;
    }
    //A 97
    if (codigoLetra == 97){
        aba_tabela = (aba_tabela+1)%2;
    }

});