/* veterinaria.js */

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {

  // Validación de formularios
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita envío real por ahora

      // Validar campos vacíos
      let valido = true;
      form.querySelectorAll("input, textarea, select").forEach(campo => {
        if (campo.hasAttribute("required") && campo.value.trim() === "") {
          campo.classList.add("is-invalid");
          valido = false;
        } else {
          campo.classList.remove("is-invalid");
          campo.classList.add("is-valid");
        }
      });

      // Mensaje de confirmación
      if (valido) {
        alert("Formulario enviado correctamente. Nos pondremos en contacto contigo.");
        form.reset();
        form.querySelectorAll(".is-valid").forEach(campo => campo.classList.remove("is-valid"));
      } else {
        alert("Por favor, completa todos los campos obligatorios.");
      }
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  // Cerrar automáticamente al enviar formulario
  const modales = document.querySelectorAll(".modal form");
  modales.forEach(form => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Datos enviados correctamente.");
      const modal = bootstrap.Modal.getInstance(form.closest(".modal"));
      modal.hide();
      form.reset();
    });
  });

  // Configuración del carrusel
  const carrusel = document.querySelector("#mainCarousel");
  if (carrusel) {
    const carouselInstance = new bootstrap.Carousel(carrusel, {
      interval: 4000, // cambia cada 4 seg
      ride: "carousel"
    });
  }

  // Feedback visual en inps
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#1f3c88";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "";
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  // Saludo dinámico según la hora del día
  const saludo = document.createElement("div");
  saludo.className = "alert alert-info text-center";
  const hora = new Date().getHours();

  if (hora < 12) {
    saludo.textContent = "Buenos días, bienvenido a VetClinica!";
  } else if (hora < 18) {
    saludo.textContent = "Buenas tardes, gracias por visitarnos!";
  } else {
    saludo.textContent = "Buenas noches, cuida a tu mascota con VetClinica!";
  }

  // Insertar saludo en la página principal si existe el carrusel
  const mainCarousel = document.querySelector("#mainCarousel");
  if (mainCarousel) {
    mainCarousel.insertAdjacentElement("beforebegin", saludo);
  }

  // Confirmación personalizada al reservar cita
  const citasForm = document.querySelector("form");
  if (citasForm && window.location.pathname.includes("citas.html")) {
    citasForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Tu cita ha sido registrada. Te enviaremos un correo de confirmación pronto.");
      citasForm.reset();
    });
  }

});
