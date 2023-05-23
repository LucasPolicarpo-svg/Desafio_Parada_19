function muda_fundo(){
    let box = document.getElementById("box");
    console.log(box);
    let cor = document.getElementById("i_cor").value;

    switch(cor){
        case "1":
            box.style.backgroundImage = "url('/img/praia.jpg')";
            break;
        case "2":
            box.style.backgroundImage = "url('/img/everest.jpg')";
            break;
        case "3":
            box.style.backgroundImage = "url('/img/saara.jpg')";
            break;
        default:
            box.style.backgroundImage = "url('/img/floresta.jpg')";
    }

}