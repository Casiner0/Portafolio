
function clickColor(color) {
    $('#btn-' + color).click(function () {
        portfolioChangeColor(color);
    });
}

function portfolioChangeColor(color) {
    const ifColor = {
        red: () => setColor_scroll($(".overlay"), 'linear-gradient(#EF3724, #f47e71)', $("body"), '#EF3724'),
        blue: () => setColor_scroll($(".overlay"), 'linear-gradient(#2960f7, #99b1f5)', $("body"), '#2960f7'),
        green: () => setColor_scroll($(".overlay"), 'linear-gradient(#8cc63f, #c4e994)', $("body"), ' #8cc63f'),
        orange: () => setColor_scroll($(".overlay"), 'linear-gradient(#fd7e14, #f8c093)', $("body"), '#fd7e14'),
        purple: () => setColor_scroll($(".overlay"), 'linear-gradient(#6f42c1, #9f8ac7)', $("body"), '#6f42c1')
    };
    let colorDefault = '#EF3724';
    const colorC = ifColor[color] ? ifColor[color]() : ifColor[colorDefault]();    
}

function setColor_scroll(overlay, background, body, style){
    overlay.css({'background': background});
    body.css({'--scrollbar-color': style});  //cambiar el color del scrollbar
}

//Alert
function MostrarMensaje(div) {
    div.slideDown(1000);
    setTimeout(function () {
        div.slideUp(500);
    }, 3000);
}

function dangerAlert() {
    MostrarMensaje($("#alerta_enviado"));
    $("#alerta_enviado").text("Campo vacío o incorrecto").addClass("dangerAlert").removeClass("alert");
}

function successAlert() {
    MostrarMensaje($("#alerta_enviado"));
    $("#alerta_enviado").text("Mensaje Enviado").removeClass("dangerAlert").addClass("alert");
}