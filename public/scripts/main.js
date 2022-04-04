import Modal from './modal.js'

const modal = Modal()

//Pegando as tag do modal para fazer alteração de seu conteudo
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//Para cada botão existente adiciona-se uma evento de listenner
//Quando clicado abre o modal
checkButtons.forEach(button => {
  //Adicionar a escuta ao botão
  button.addEventListener('click', handleClick)
})

/* Pega todos os botões que existe a classe delete */
const deleteButtons = document.querySelectorAll('.actions a.delete')

/* Quando o botão delete for clicado ele abre a modal */
deleteButtons.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

/* A função handle efetua a chamada para abertura do modal,
Faz a troca dos titulos e descrições dos botões entre marcar como lido ou excluir */
function handleClick(event, check = true) {
  event.preventDefault() //Faz com que a # não seja incluida na URL

  /* Texto para troca. */
  // true? 'faz algo' : 'faz outra '
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const form = document.querySelector('.modal form')
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  form.setAttribute('Action', `room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} está pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  // Mudando a cor do botão
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //abrir modal
  modal.open()
}
