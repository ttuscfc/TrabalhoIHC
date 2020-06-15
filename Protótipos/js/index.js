var itensCount = 0;
var count = 0;

function goCarrinho() {
    showDialog("Adicionado ao carrinho!", 2000);

    if (itensCount === 0) {
        // Mostra badge pela prim ve
        animateFirstBadge();
    }
    else {
        animateBadge();
    }



}

function showDialog(texto, ms) {

    if (count > 0)
        return;

    document.body.innerHTML += `
    <div id='dialog' style='position: fixed; text-align: center; font-size: 15px; line-height: 50px; right: 50px; top: 70px; background-color: black; color: white; width: 200px; height: 50px; border-radius: 20px;'>
        ${texto}
    </div>
    `;

    var b = document.getElementById("dialog");

    var anim2 = setInterval(() => {

        count++

        if (count >= (ms / 4)) {
            b.remove();
            clearInterval(anim2);
            count = 0;
        }

    }, 1);

}


function animateFirstBadge() {

    var b = document.getElementById("badge");

    b.innerHTML = itensCount + 1;
    itensCount++;

    var anim = setInterval(() => {

        var opa = parseFloat(b.style.opacity);
        opa = opa + 0.1;
        b.style.opacity = opa;

        if (opa >= 1) {
            clearInterval(anim);
        }

    }, 10);

}

function animateBadge() {
    var b = document.getElementById("badge");
    b.innerHTML = itensCount + 1;
    itensCount++;

}
