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
const atribuir = document.getElementById('.atribuir');
const chk = document.getElementById('chk');

const func = "Organizador"

//Modal começa aqui
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const modalSection = document.querySelector(".modal-section");
const showModalBtn = document.querySelector(".show-modal");
const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // checkInputs(); -> comentei, pois precisa fazer a verifição dos inputs
  showSuccessModal(); // -> vou deixar comentado onde ele deve ficar, linha 90
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

//Modal fecha aqui

function checkInputs() {
  const emailValue = email.value;
  
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
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

let funcoes = ["Avaliador", "Autor", "Chair", "Organizador"];

function addFuncao(selectedFuncao){
    options.innerHTML = "";
    funcoes.forEach(funcao => {
        let isSelected = funcao == selectedFuncao ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${funcao}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}

addFuncao();

function updateName(selectedLi){
    searchInp.value = "";
    addFuncao(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = funcoes.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Opa, função não encontrada, tente novamente!</p>`;
});

selectBtn.addEventListener("click", ()=>{
    wrapper.classList.toggle("active");
});

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})



function cadOrganizador() {
  
  console.log(func)
  const id = 5

  axios.put("http://localhost:3001/ouvinte/"+id, {
   funcao: func
 
 
 })
 .then(function (response) {
   console.log(response.data);
 })
 .catch(function (error) {
   console.error(error)
 });
 
 }