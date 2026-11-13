document.addEventListener("DOMContentLoaded", () => {
    const secoes = document.querySelectorAll(".animar");

    // Observador para detectar quando cada seção entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara a animação de entrada rápida
                entry.target.classList.add("visivel");

                // Anima a barra de velocidade dentro do cartão
                const barra = entry.target.querySelector(".speed-bar");
                if (barra) {
                    const larguraAlvo = barra.getAttribute("data-width");
                    setTimeout(() => {
                        barra.style.width = larguraAlvo;
                    }, 200);
                }
            }
        });
    }, {
        threshold: 0.2 // Dispara quando 20% do cartão estiver visível
    });

    secoes.forEach((secao) => {
        observer.observe(secao);
    });
});