const $ = a => document.querySelector(a);
var  pessoa = new Object();
var carro = new Object();

const  getGarage = () => localStorage.pessoa ? JSON.parse(localStorage.pessoa) : [];
const  getGarageCarro = () => localStorage.carro ? JSON.parse(localStorage.carro) : [];

pessoa = getGarage();
carro = getGarageCarro();

// objeto relacionado a pessoa dona do estacionamento

pessoa.nome = Array();
pessoa.cpf = Array();
pessoa.apartamento = Array();
pessoa.data_nascimento = Array();
pessoa.telefone = Array();
pessoa.vaga = Array();

// objeto relacionado ao carro

carro.marca = Array();
carro.modelo = Array();
carro.placa = Array();
carro.ano = Array();

// informações para abastecer o localStorage para termos um de exemplo
pessoa.nome = ["","Augusto"];
pessoa.cpf = ["","04312365026"];
pessoa.apartamento = ["","01b"];
pessoa.data_nascimento = ["","23/06/1999"];
pessoa.telefone = ["","51996638625"];
pessoa.vaga = ["","1"] ;

// informações para abastecer o localStorage para termos um de exemplo
carro.marca = ["","honda"];
carro.modelo = ["","civic"];
carro.placa = ["","1234567"] ;
carro.ano = ["","2014"] ;

localStorage.pessoa  = JSON.stringify(pessoa);
localStorage.carro  = JSON.stringify(carro);
// variavel que pega as info das garagem registradas em local storage

// Abaixo adicionar um evento no botão, aonde ao clicar todo o codigo é processado.
$(".teste").addEventListener("click", e => {
      // alert("placa.");
      cleanEndInsert ();

function cleanEndInsert () {
      const clean = document.createElement("logo_menu");
      // JS QUE LIMPA O LOGO
      document.getElementById("logo_menu").innerHTML = "";
      Insert_consulta (carro, pessoa);
}
      // JS QUE FAZ A LISTAGEM DE CADASTRO

function Insert_consulta (carro, pessoa) {
  var insert_html= document.getElementById("logo_menu");
  insert_html.innerHTML = '';
  for (var i = 0; i < pessoa.vaga.length +1 ; i++) {

    if(!pessoa.nome[i] || !pessoa.cpf[i] || !pessoa.apartamento[i] || !pessoa.data_nascimento[i] ||
      !pessoa.telefone[i] || !pessoa.vaga[i] || !carro.marca[i] ||!carro.modelo[i] || !carro.placa[i] || !carro.ano[i]){
    } else{

      console.log(pessoa.nome[i]);
      var carro_estrutura = document.createElement('div');
      carro_estrutura.innerHTML = `
      <table>
      <thead>
      <tr>
      <th>nome</th>
      <th>cpf</th>
      <th>apartamento</th>
      <th>data_nascimento</th>
      <th>telefone</th>
      <th>vaga</th>
      </tr>
      <td>${pessoa.nome[i]}</td>
      <td>${pessoa.cpf[i]}</td>
      <td>${pessoa.apartamento[i]}</td>
      <td>${pessoa.data_nascimento[i]}</td>
      <td>${pessoa.telefone[i]}</td>
      <td>${pessoa.vaga[i]}</td>

      <tr>
      <th>marca</th>
      <th>modelo</th>
      <th>placa</th>
      <th>ano</th>
      </tr>
      <td>${carro.marca[i]}</td>
      <td>${carro.modelo[i]}</td>
      <td>${carro.placa[i]}</td>
      <td>${carro.ano[i]}</td>
      </thead>
      </table>
      `;
      insert_html.appendChild(carro_estrutura);
    }
  }
  console.log("teste de o que fica salvo em pessoa");
  console.log(pessoa);
};
});

$(".teste2").addEventListener("click", e => {

  Insert_cadastro (carro, pessoa);
  function Insert_cadastro(carro, pessoa) {

    var insert_html= document.getElementById("logo_menu");
    document.getElementById("logo_menu").style.top = "8vw";
    insert_html.innerHTML = '';

    var structure_main = document.createElement('div');
    structure_main.innerHTML = `
    <div id="cadastro_pessoa"  >

    <h1>cadastro da pessoa</h1>
    <input type="text" id="name" placeholder="Nome do Dono" autocomplete="off">
    <input type="text" id="cpf" placeholder="cpf do dono" autocomplete="off">
    <input type="text" id="apartamento" placeholder="apartamento" autocomplete="off">
    <input type="text" id="data" placeholder="data de nascimento" autocomplete="off">
    <input type="text" id="telefone" placeholder="telefone" autocomplete="off">
    <input type="text" id="vaga" placeholder="numero da vaga" autocomplete="off">

    </div>

    <div id="cadastro_carro"  >
    <h2>cadastro do Carro</h2>

    <input type="text" id="marca" placeholder="marca do carro" autocomplete="off">
    <input type="text" id="modelo" placeholder="modelo do carro" autocomplete="off">
    <input type="text" id="placa" placeholder="placa do carro" autocomplete="off">
    <input type="text" id="ano" placeholder="ano do carro" autocomplete="off">
    </div>

  <button id="send" class="success" onclick="Insert_cadastro_bank(carro, pessoa)" >Registrar</button>
    `
    insert_html.appendChild(structure_main);
  };
});

function Insert_cadastro_bank(carro ,pessoa) {

  const  getGarage = () => localStorage.pessoa ? JSON.parse(localStorage.pessoa) : [];
  const  getGarageCarro = () => localStorage.carro ? JSON.parse(localStorage.carro) : [];

  const nome = $("#name").value;
  const cpf = $("#cpf").value;
  const apartamento = $("#apartamento").value;
  const data_nascimento = $("#data").value;
  const telefone = $("#telefone").value;
  const vaga = parseInt($("#vaga").value);
  var marcador_matriz = parseInt(vaga);

  console.log(marcador_matriz);
  console.log(vaga);
  console.log(pessoa.vaga);

  const marca = $("#marca").value;
  const modelo = $("#modelo").value;
  const placa = $("#placa").value;
  const ano = $("#ano").value;

  if(!nome || !cpf || !apartamento || !data_nascimento || !telefone || !marca || !modelo || !placa || !ano){
    alert("Os campos são obrigatórios.");
    return;
  }
    console.log(pessoa.vaga[marcador_matriz]);

  if(vaga > 0 && vaga < 201 && pessoa.vaga[marcador_matriz] != vaga ){
    console.log(pessoa.vaga[marcador_matriz]);


      console.log(pessoa);
      console.log("teste");
      console.log(carro);

      pessoa.nome[marcador_matriz] =nome  ;
      pessoa.cpf[marcador_matriz] =cpf  ;
      pessoa.apartamento[marcador_matriz] = apartamento;
      pessoa.data_nascimento[marcador_matriz]= data_nascimento;
      pessoa.telefone[marcador_matriz]= telefone;
      pessoa.vaga[marcador_matriz] = vaga ;

      carro.marca[marcador_matriz] = marca ;
      carro.modelo[marcador_matriz] =modelo ;
      carro.placa[marcador_matriz] = placa ;
      carro.ano[marcador_matriz] = ano ;

      localStorage.pessoa = JSON.stringify(pessoa);
      localStorage.carro = JSON.stringify(carro);

      console.log(pessoa);
      console.log("teste");
      console.log(carro);

      alert("cadastro executado com sucesso.");

  }else {
        alert("vaga digitada errada ou já existe carro cadastrado, tente novamente.");
    return;
  }
}

$(".teste3").addEventListener("click", e => {
  cleanEndInsert ();
  function cleanEndInsert () {
    const clean = document.createElement("logo_menu");

    // JS QUE LIMPA O LOGO
    document.getElementById("logo_menu").innerHTML = "";

    console.log(carro);
    Insert_consulta (carro, pessoa);
    // JS QUE FAZ A LISTAGEM DE CADASTRO

    function Insert_consulta (carro, pessoa) {

      const getGarage = () => localStorage.pessoa ? JSON.parse(localStorage.pessoa) : [];
      const getGarageCarro = () => localStorage.carro ? JSON.parse(localStorage.carro) : [];

      // var pessoa = getGarage();
      // var carro = getGarageCarro();

      var insert_html= document.getElementById("logo_menu");
      insert_html.innerHTML = '';
      for (var i = 0; i < pessoa.nome.length; i++) {

      // verificando na matriz qual item esta nulo e tirando da consulta
      if(!pessoa.nome[i] || !pessoa.cpf[i] || !pessoa.apartamento[i] || !pessoa.data_nascimento[i] ||
        !pessoa.telefone[i] || !pessoa.vaga[i] || !carro.marca[i] ||!carro.modelo[i] || !carro.placa[i] || !carro.ano[i]){
      } else{

        var carro_estrutura = document.createElement('div');
        carro_estrutura.innerHTML = `
        <table>
        <thead>
        <tr>
        <th>nome</th>
        <th>cpf</th>
        <th>apartamento</th>
        <th>data_nascimento</th>
        <th>telefone</th>
        <th>vaga</th>
        </tr>
        <td>${pessoa.nome[i]}</td>
        <td>${pessoa.cpf[i]}</td>
        <td>${pessoa.apartamento[i]}</td>
        <td>${pessoa.data_nascimento[i]}</td>
        <td>${pessoa.telefone[i]}</td>
        <td>${pessoa.vaga[i]}</td>
        <tr>
        <th>marca</th>
        <th>modelo</th>
        <th>placa</th>
        <th>ano</th>
        </tr>
        <td>${carro.marca[i]}</td>
        <td>${carro.modelo[i]}</td>
        <td>${carro.placa[i]}</td>
        <td>${carro.ano[i]}</td>
        <td> <button class="delete" onclick="delete_info_cadastro(${i})"> Excluir </button> </td>
        </thead>
        </table>
        `;
        insert_html.appendChild(carro_estrutura);

      }
    }
  }
};
});

function delete_info_cadastro (i) {
  console.log("delete");
  console.log(i);

  const  getGarage = () => localStorage.pessoa ? JSON.parse(localStorage.pessoa) : [];
  const  getGarageCarro = () => localStorage.carro ? JSON.parse(localStorage.carro) : [];

  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);

  pessoa.nome[i] = "";
  pessoa.cpf[i] = "";
  pessoa.apartamento[i] = "";
  pessoa.data_nascimento[i] = "";
  pessoa.telefone[i] = "";
  pessoa.vaga[i] = "";
  carro.marca[i] = "";
  carro.modelo[i] = "";
  carro.placa[i] = "";
  carro.ano[i] = "";

  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);
  cleanEndInsert ();
}
// consulta de pesquisa pelo dono do carro
function consultar_dono () {
  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);

  const dono_carro = $("#dono_carro").value;

  if(!dono_carro){
    alert("Os campos são obrigatórios.");
    return;
  }
  var insert_html= document.getElementById("logo_menu");
  insert_html.innerHTML = '';

  for (var i = 0; i < pessoa.nome.length; i++) {

    var bandeira = pessoa.nome[i];

    if (bandeira == dono_carro) {

              var carro_estrutura = document.createElement('div');
              carro_estrutura.innerHTML = `
              <table>
              <thead>
              <tr>
              <th>nome</th>
              <th>cpf</th>
              <th>apartamento</th>
              <th>data_nascimento</th>
              <th>telefone</th>
              <th>vaga</th>
              </tr>
              <td>${pessoa.nome[i]}</td>
              <td>${pessoa.cpf[i]}</td>
              <td>${pessoa.apartamento[i]}</td>
              <td>${pessoa.data_nascimento[i]}</td>
              <td>${pessoa.telefone[i]}</td>
              <td>${pessoa.vaga[i]}</td>
              <tr>
              <th>marca</th>
              <th>modelo</th>
              <th>placa</th>
              <th>ano</th>
              </tr>
              <td>${carro.marca[i]}</td>
              <td>${carro.modelo[i]}</td>
              <td>${carro.placa[i]}</td>
              <td>${carro.ano[i]}</td>
              </thead>
              <tbody id="garage"></tbody>
              </table>
              `;

              insert_html.appendChild(carro_estrutura);


    }else if(i == pessoa.nome.length-1){

    }
  }
}
// consulta de pesquisa pelo apartamento
function consultar_apartamento () {
  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);

  const consultar_apartamento = $("#consultar_apartamento").value;

  if(!consultar_apartamento){
    alert("Os campos são obrigatórios.");
    return;
  }
  var insert_html= document.getElementById("logo_menu");
  insert_html.innerHTML = '';

  for (var i = 0; i < pessoa.apartamento.length; i++) {

    var bandeira = pessoa.apartamento[i];

    if (bandeira == consultar_apartamento) {

              var carro_estrutura = document.createElement('div');
              carro_estrutura.innerHTML = `
              <table>
              <thead>
              <tr>
              <th>nome</th>
              <th>cpf</th>
              <th>apartamento</th>
              <th>data_nascimento</th>
              <th>telefone</th>
              <th>vaga</th>
              </tr>
              <td>${pessoa.nome[i]}</td>
              <td>${pessoa.cpf[i]}</td>
              <td>${pessoa.apartamento[i]}</td>
              <td>${pessoa.data_nascimento[i]}</td>
              <td>${pessoa.telefone[i]}</td>
              <td>${pessoa.vaga[i]}</td>
              <tr>
              <th>marca</th>
              <th>modelo</th>
              <th>placa</th>
              <th>ano</th>
              </tr>
              <td>${carro.marca[i]}</td>
              <td>${carro.modelo[i]}</td>
              <td>${carro.placa[i]}</td>
              <td>${carro.ano[i]}</td>
              </thead>
              <tbody id="garage"></tbody>
              </table>
              `;
              insert_html.appendChild(carro_estrutura);
    }else if(i == pessoa.apartamento.length-1){

    }
  }
}

// consulta de pesquisa pelo telefone
function consultar_telefone () {
  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);

  const telefone_sem_fio = $("#telefone_sem_fio").value;

  if(!telefone_sem_fio){
    alert("Os campos são obrigatórios.");
    return;
  }
  var insert_html= document.getElementById("logo_menu");
  insert_html.innerHTML = '';

  for (var i = 0; i < pessoa.telefone.length; i++) {
    var bandeira = pessoa.telefone[i];
    if (bandeira == telefone_sem_fio) {
              var carro_estrutura = document.createElement('div');
              carro_estrutura.innerHTML = `
              <table>
              <thead>
              <tr>
              <th>nome</th>
              <th>cpf</th>
              <th>apartamento</th>
              <th>data_nascimento</th>
              <th>telefone</th>
              <th>vaga</th>
              </tr>
              <td>${pessoa.nome[i]}</td>
              <td>${pessoa.cpf[i]}</td>
              <td>${pessoa.apartamento[i]}</td>
              <td>${pessoa.data_nascimento[i]}</td>
              <td>${pessoa.telefone[i]}</td>
              <td>${pessoa.vaga[i]}</td>
              <tr>
              <th>marca</th>
              <th>modelo</th>
              <th>placa</th>
              <th>ano</th>
              </tr>
              <td>${carro.marca[i]}</td>
              <td>${carro.modelo[i]}</td>
              <td>${carro.placa[i]}</td>
              <td>${carro.ano[i]}</td>
              </thead>
              <tbody id="garage"></tbody>
              </table>
              `;
              insert_html.appendChild(carro_estrutura);
    }else if(i == pessoa.telefone.length-1){

    }
  }
}

// consulta de pesquisa pelo apartamento
function consultar_veiculo () {
  localStorage.pessoa = JSON.stringify(pessoa);
  localStorage.carro = JSON.stringify(carro);

  const consultar_veiculo = $("#consultar_veiculo").value;

  if(!consultar_veiculo){
    alert("Os campos são obrigatórios.");
    return;
  }

  var insert_html= document.getElementById("logo_menu");
  insert_html.innerHTML = '';

  for (var i = 0; i < carro.marca.length; i++) {

    var bandeira = carro.marca[i];

    if (bandeira == consultar_veiculo) {
              var carro_estrutura = document.createElement('div');
              carro_estrutura.innerHTML = `
              <table>
              <thead>
              <tr>
              <th>nome</th>
              <th>cpf</th>
              <th>apartamento</th>
              <th>data_nascimento</th>
              <th>telefone</th>
              <th>vaga</th>
              </tr>
              <td>${pessoa.nome[i]}</td>
              <td>${pessoa.cpf[i]}</td>
              <td>${pessoa.apartamento[i]}</td>
              <td>${pessoa.data_nascimento[i]}</td>
              <td>${pessoa.telefone[i]}</td>
              <td>${pessoa.vaga[i]}</td>
              <tr>
              <th>marca</th>
              <th>modelo</th>
              <th>placa</th>
              <th>ano</th>
              </tr>
              <td>${carro.marca[i]}</td>
              <td>${carro.modelo[i]}</td>
              <td>${carro.placa[i]}</td>
              <td>${carro.ano[i]}</td>
              </thead>
              <tbody id="garage"></tbody>
              </table>
              `;

              insert_html.appendChild(carro_estrutura);
    }else if(i == carro.marca.length-1){

    }
  }
}
