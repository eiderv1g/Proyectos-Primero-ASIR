let posicion = 50;
let intervalo = null;

const nyanCat = document.getElementById("nyancat");

const gato = {
  marca: "Nyan",
  modelo: "Cat",
  piloto: "Miriam",

  cambiarPiloto() {
    this.piloto = document.getElementById("nombre").value;
    document.getElementById("piloto").textContent = this.piloto;
  },

  arrancar() {
    document.getElementById("sonido").play();
  },

  cambiarMarcha(sonido, velocidad) {
    document.getElementById(sonido).play();
    document.getElementById("sonido").play();

    clearInterval(intervalo);

    intervalo = setInterval(() => {
      posicion += velocidad;
      nyanCat.style.left = `${posicion}px`;

      if (posicion >= window.innerWidth) {
        posicion = -272;
      }
    }, 10);
  },

  parar() {
    document.getElementById("stop").play();
    document.getElementById("sonido").load();
    clearInterval(intervalo);
  }
};

// Mostrar datos iniciales
document.getElementById("marca").textContent = gato.marca;
document.getElementById("modelo").textContent = gato.modelo;
document.getElementById("piloto").textContent = gato.piloto;

// Eventos
document.getElementById("cpiloto").addEventListener("click", () => gato.cambiarPiloto());
document.getElementById("arrancar").addEventListener("click", () => gato.arrancar());
document.getElementById("parar").addEventListener("click", () => gato.parar());

document.getElementById("primera").addEventListener("click", () => gato.cambiarMarcha("pri", 0.5));
document.getElementById("segunda").addEventListener("click", () => gato.cambiarMarcha("seg", 1.5));
document.getElementById("tercera").addEventListener("click", () => gato.cambiarMarcha("ter", 2.5));
document.getElementById("cuarta").addEventListener("click", () => gato.cambiarMarcha("cua", 3.5));
document.getElementById("atras").addEventListener("click", () => gato.cambiarMarcha("atr", -0.5));
