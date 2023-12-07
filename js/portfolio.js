$(function () {

    //Actualizar el año automaticamente
    let fecha = new Date();
    let anno = fecha.getFullYear();
    $("#anno").text(anno);

    //Actualizar edad
    $("#edad").text(anno - 1988);

    //Enviar mensaje con EmailJS
    $("#alerta_enviado").hide();
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validarTexto($("#Name"))) {
            $("#Name").addClass("is-invalid");
            $("#Name").focus();
            dangerAlert();
            return false;
        } else {
            $("#Name").removeClass("is-invalid");
            successAlert();
        }

        if (!validarCorreo($("#Email"))) {
            $("#Email").addClass("is-invalid");
            $("#Email").focus();
            dangerAlert();
            return false;
        } else {
            $("#Email").removeClass("is-invalid");
            successAlert();
        }

        btn.value = 'Enviando ...';
        const serviceID = 'default_service';
        const templateID = 'template_svkpfgn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                MostrarMensaje($("#alerta_enviado"));
                $("#form").trigger('reset');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });

    //Cambiar color del portafolio
    clickColor('red');
    clickColor('blue');
    clickColor('green');
    clickColor('orange');
    clickColor('purple');
});
