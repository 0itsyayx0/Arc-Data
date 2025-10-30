document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.getElementById("inicio");
    const quienesSomos = document.getElementById("quienes-somos");
    const inicioBtn = document.getElementById("inicio-btn");
    const quienesBtn = document.getElementById("quienes-somos-btn");
    const volver = document.getElementById("volver-inicio");

    quienesBtn.addEventListener("click", () => {
        inicio.classList.remove("visible");
        inicio.classList.add("oculto");
        quienesSomos.classList.remove("oculto");
        quienesSomos.classList.add("visible");
    });

    volver.addEventListener("click", () => {
        quienesSomos.classList.remove("visible");
        quienesSomos.classList.add("oculto");
        inicio.classList.remove("oculto");
        inicio.classList.add("visible");
    });
  
});


