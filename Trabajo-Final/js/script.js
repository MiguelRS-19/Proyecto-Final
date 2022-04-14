$(document).ready(function(){
    $('#btnBoton').click(function(){
        var errores = '';
        // validar nombre ========
        if($('#nombre').val()==''){
            errores += '<p>Escriba un nombre completo</p>';
            $('#nombre').css("border-bottom-color", "#F14B4B")    
        }  else{
            $('#nombre').css("border-bottom-color", "#d1ced1")
        }

        // validar correo ========
        if($('#email').val()==''){
            errores += '<p>Ingrese un correo electronico</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1ced1")
        }

        // validar asunto ========
        if($('#asunto').val()==''){
            errores += '<p>Escriba un asunto</p>';
            $('#asunto').css("border-bottom-color", "#F14B4B")
        } else{
            $('#asunto').css("border-bottom-color", "#d1ced1")
        }

        // validar mensaje ========
        if($('#mensaje').val()==''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")    
        } else{
           $('#mensaje').css("border-bottom-color", "#d1ced1") 
        }

        // validar mensaje =======
        if( errores == '' == false){
            var validarmensaje =    '<div class="validar">'+
                                        '<div class="validar-mensaje">'+
                                            '<h3>Errores encontrados</h3>'+
                                            errores+
                                            '<span id="btnClose">Cerrar</span>'+
                                       '</div>'+
                                    '</div>'
            $('body').append(validarmensaje);
        }

        // Cerrando modal =======
        $('#btnClose').click(function(){
            $('.validar').remove();
        });

    });

});
