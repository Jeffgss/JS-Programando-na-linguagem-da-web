let botaoBuscarPaciente = document.querySelector("#buscar-paciente");

botaoBuscarPaciente.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    let erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("esconder-nome");
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      erroAjax.classList.remove("esconder-nome");
    }
  });

  xhr.send();
});
