$(document).ready(function() {
    $('#div-btn1').click(function() {
        $.ajax({
            type: "GET",
            url: "perfil/miPerfil.html",
            success: function(a) {
                $('#div-results').html(a);
            }
        });
    });
});
$(document).ready(function() {
    $('#div-btn2').click(function() {
        $.ajax({
            type: "GET",
            url: "perfil/imagenPerfil.html",
            success: function(a) {
                $('#div-results').html(a);
            }
        });
    });
});