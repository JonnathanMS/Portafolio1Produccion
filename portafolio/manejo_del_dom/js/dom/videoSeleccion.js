let d = document;

export default function videoSelect() {

    const videoSelect = d.getElementById("videoSelect");
    const videoContainer = d.getElementById("videoContainer");
    videoSelect.addEventListener("change", () => {
        const selectedVideo = videoSelect.value;

        if (selectedVideo) {
            // Cargar el video de YouTube en el div
            videoContainer.innerHTML = `${selectedVideo}`
        } else {
            // Limpiar el div si no se ha seleccionado un video
            videoContainer.innerHTML = "";
        }
    });

}