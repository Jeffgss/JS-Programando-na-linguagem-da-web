let titulo = document.querySelector(".title").textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
   let paciente = pacientes[i];

   let tdPeso = paciente.querySelector(".info-peso");
   let peso = tdPeso.textContent;

   let tdAltura = paciente.querySelector(".info-altura");
   let altura = tdAltura.textContent;

   let tdImc = paciente.querySelector(".info-imc");

   let pesoEValido = validaPeso(peso);
   let alturaEValida = validaAltura(altura);

   if (!pesoEValido) {
      pesoEValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
   }

   if (!alturaEValida) {
      alturaEValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
   }

   if (pesoEValido && alturaEValida) {
      let imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
   }
};

function validaPeso(peso) {
   if (peso >= 0 && peso <= 597) {
      return true;
   } else {
      return false;
   }
};

function validaAltura(altura) {
   if (altura >= 0 && altura <= 2.74) {
      return true;
   } else {
      return false;
   }
};

function calculaImc(peso, altura) {
   let imc = 0;
   imc = peso / (altura * altura);

   return imc.toFixed(2);
}