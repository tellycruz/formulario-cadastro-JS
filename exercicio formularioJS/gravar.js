document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let miniCurriculo = document.getElementById("mini-curriculo").value;
  let NodeListareaInteresse = document.querySelectorAll(
    'input[name="area"]:checked'
  );
  let cargo = document.querySelector('input[name="cargo"]:checked').value;

  if (
    (nome === "" && endereco === "" && cidade === "") ||
    estado === "selecione"
  ) {
    alert(`Dados pessoais devem ser preenchidos!`);
    return;
  }

  if (NodeListareaInteresse.length === 0) {
    alert("Deve selecionar ao menos uma área de interesse!");
    return;
  }

  let areaInteresse = [];

  for (let item of NodeListareaInteresse) {
    areaInteresse.push(item.value);
  }

  let dadosUsuario = {
    nome,
    endereco,
    cidade,
    estado,
    cargo,
    areaInteresse,
    miniCurriculo,
  };

  mostrarDadosPreenchidos(dadosUsuario);

  alert(`Dados gravados!`);

  resetDados();
});

function mostrarDadosPreenchidos(dados) {
  for (const atributo in dados) {
    console.log(`${atributo}: ${dados[atributo]}`);
  }
}

function resetDados() {
  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "selecione";
  document.getElementById("mini-curriculo").value = "";
}
