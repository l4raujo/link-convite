document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("video-link");
    const modal = document.getElementById("modal");
    const contador = document.getElementById("contador");
    const textoInicial = document.getElementById("texto");
    const redirectButton = document.getElementById("redirectButton");
    let tempoRestante = 5;

    // Ao clicar no botão, inicia o vídeo e exibe ele na tela
    playButton.addEventListener("click", () => {
        video.style.display = "block"; // Mostra o vídeo
        textoInicial.style.display = "none";
        playButton.style.display = "none"; // Esconde o botão

        video.play().then(() => {
            video.muted = false; // Ativa o áudio
        }).catch(err => console.error("Erro ao ativar áudio:", err));
    });

    // Quando o vídeo terminar, exibir o modal
    video.addEventListener("ended", () => {
        modal.style.display = "flex";

        const intervalo = setInterval(() => {
            tempoRestante--;
            contador.innerText = tempoRestante;

            if (tempoRestante === 0) {
                clearInterval(intervalo);
                redirecionarAgora();
            }
        }, 1000);
    });

    // Função para redirecionamento
    // function redirecionarAgora() {
   //     window.location.href = "https://chat.whatsapp.com/Ce7GngWtGaE8tNxQ1JHP7l";
  //  }

    // Botão "Ir agora" também redireciona
    // redirectButton.addEventListener("click", redirecionarAgora);
});
