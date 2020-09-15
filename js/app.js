window.onload = Animation;
window.onscroll = AnimatedScroll;

function Animation(){
    if(window.pageYOffset >= 0){
        //alert("evento scroll detectado! " + window.pageXOffset + " " + window.pageYOffset);

        // PAGINA INICIAL
        // Animação do texto
        document.getElementById('txt-saudacoes').style.transition = "opacity 1s, left .5s";
        document.getElementById('txt-saudacoes').style.opacity = "100%";
        document.getElementById('txt-saudacoes').style.left = "0em";

        // Animação da imagem
        document.getElementById('img-saudacoes').style.transition = "opacity 1s, left .5s";
        document.getElementById('img-saudacoes').style.opacity = "100%";
        document.getElementById('img-saudacoes').style.left = "0em";
    }
}

function AnimatedScroll() {
    // console.log(window.pageYOffset)

    if(window.pageYOffset >= 500){
        document.getElementById('fixed').style.transition = "all .3s";
        document.getElementById('fixed').style.position = "fixed";
        document.getElementById('fixed').style.top = "0em";
    }else{
        document.getElementById('fixed').style.position = "relative";
        document.getElementById('fixed').style.top = "0em";
    }

    // Animação de Grid e Title
    // alert(document.getElementsByClassName("animated-title")[0].offsetTop);

    var grids = document.getElementsByClassName("animated-title").length;

    for (i = 0; i < grids; i++) {
    
    if(window.pageYOffset >= (document.getElementsByClassName("animated-title")[i].offsetTop - 700)){

        // Animação do titulo
        document.getElementsByClassName("animated-title")[i].style.transition = "all .5s";
        document.getElementsByClassName("animated-title")[i].style.opacity = "100%";
        document.getElementsByClassName("animated-title")[i].style.marginLeft = "0em";

        // Animação da Grid
        document.getElementsByClassName("animated-grid")[i].style.transition = "opacity 1.5s";
        document.getElementsByClassName("animated-grid")[i].style.opacity = "100%";
    }
    }
}