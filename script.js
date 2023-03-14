
// Código de movimento do pontero com Modelo 3d

const model = document.getElementById("model");
const bodyFilter = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0
    var y = e.pageY / window.innerHeight - 0
    model.style.transform = `
    perspective(50vw)
    rotateX(${ y * 0 + 0}deg)
    rotateZ(${ -x * 20 + 10}deg)
    translateZ(-9vw)
    `;
}
bodyFilter.addEventListener("pointermove", base)

//              fim do código