const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const instituicao = document.getElementById("instituicao");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
searchInp = wrapper.querySelector("input");
options = wrapper.querySelector(".options");

const modalSection = document.querySelector(".modal-section");
const showModalBtn = document.querySelector(".show-modal");
const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-btn");



form.addEventListener("submit", (e) => {
  e.preventDefault();
    // checkInputs(); -> comentei, pois precisa fazer a verifição dos inputs
    showSuccessModal(); // -> vou deixar comentado onde ele deve ficar, linha 89
});

function showSuccessModal() {
  modalSection.classList.add("active");
}


closeBtn.addEventListener("click", () => {
  modalSection.classList.remove("active");
});


modalBox.lastElementChild.addEventListener("click", () => {
  modalSection.classList.remove("active");
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const instituicaoValue = instituicao.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (instituicaoValue === "") {
    setErrorFor(instituicao, "A Instituição é obrigatória.");
  } else {
    setSuccessFor(instituicao);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  // a função showSuccessModal(); deve ser adicionada aqui após o término dos inputs
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

let fatecs = ["Fatec da Zona Leste", "Fatec de Americana", "Fatec de Esportes", "Fatec de Itaquera", "Fatec São Paulo", "Fatec Sebrae"];

function addFatec(selectedFatec){
    options.innerHTML = "";
    fatecs.forEach(fatec => {
        let isSelected = fatec == selectedFatec ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${fatec}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}

addFatec();

function updateName(selectedLi){
    searchInp.value = "";
    addFatec(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = fatecs.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Opa, instituição não encontrada, tente novamente!</p>`;
});

selectBtn.addEventListener("click", ()=>{
    wrapper.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Encontrar o elemento li com a data-value "ouvinte"
  const ouvinteLi = document.querySelector("#selecionar li[data-value='ouvinte']");

  // Adicionar a classe 'selected' ao botão
  const selectBtn = document.querySelector(".select-btn");
  selectBtn.classList.add("selected");

  // Adicionar a classe 'selected' à opção "Ouvinte"
  if (ouvinteLi) {
    ouvinteLi.classList.add("selected");
  }
});

function toggleOptions() {
  // Adicione aqui a lógica para alternar as opções
}


function criarEvento(){
  

const organizador = document.getElementById("emailOrg").value
const editor = document.getElementById("emailEdt").value
const nomeEvento = document.getElementById("nmEvento").value
const categoria = document.getElementById("catEvento").value
const edicao = document.getElementById("nEdicao").value
const descricao = document.getElementById("DescEvento").value
const dInicio = document.getElementById("dataini").value
const dFinal = document.getElementById("datafim").value
const area = document.getElementById("area").value
const tipo = "Presencial"

  console.log(nomeEvento, categoria, edicao, descricao, area, dInicio, dFinal, tipo)
    
  axios.post("http://localhost:3001/evento", {
      organizador:organizador,
      editorChefe: editor,
      nomeEvento: nomeEvento,
      categoria: categoria,
      edicao: edicao,
      descricao: descricao,
      inicio: dInicio,
      final: dFinal,
      area: area,
      tipo: tipo,
  })
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error)
});
}