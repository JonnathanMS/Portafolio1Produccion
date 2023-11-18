
export default function visibleOculto() {
    const BtnOcultar = document.getElementById("BtnOcultar");
    const elemento = document.getElementById("mostrar-ocultar");

    BtnOcultar.addEventListener("click", () => {
        if (elemento.classList.contains("hidden")) {
            elemento.classList.remove("hidden");
        } else {
            elemento.classList.add("hidden");
        }
    });
}