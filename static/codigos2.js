$(function(){

    $.getJSON('/repositorio/api/v1.0/empresas',function(data){
        //console.log(data);
        empresa_atual = data[0][1] 
        $('#nome_principal').html(empresa_atual);

        

    })



})