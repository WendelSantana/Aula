const cliente = document.querySelector('input[name="cliente"]')
const produto = document.querySelector('input[name="produto"]')
const clienteName = document.querySelector('#cliente-name')

const form = document.querySelector('form')

const lista = document.querySelector('.list')

const btnC = document.querySelector('#cad-client')
const btnP = document.querySelector('#cad-prod')

const listaDeClientes = []
let listaDeProdutos = []

const titulo = document.createElement('li')
titulo.textContent = 'Lista de clientes'

form.addEventListener('submit', (event) => {
  event.preventDefault()
})

btnC.addEventListener('click', () => {
  if (listaDeClientes.includes(cliente.value.trim()) || cliente.value.trim() === '' || /[^a-zA-Z]+/g
    .test(cliente.value)) return
  listaDeClientes.push(cliente.value.trim())
  console.log('Clicou!', listaDeClientes)
  listarClientes()
})

btnP.addEventListener('click', () => {
  const [client] = listaDeProdutos.filter(cliente => cliente.name === clienteName.value)
  if (produto.value.trim() === '' || clienteName.value.trim() === '') return

  if (client) {
    const filter = listaDeProdutos.filter(cliente => {
      return cliente.name !== clienteName.value
    })
    client.products.push(produto.value)
    listaDeProdutos = [...filter, client]
    console.log('-----')
    console.log(listaDeProdutos)
    listarClientesProdutos()
    lista.prepend(titulo)
    return
  }
  const clientAdd = {
    name: clienteName.value,
    products: []
  }

  clientAdd.products.push(produto.value)
  listaDeProdutos.push(clientAdd)
  console.log('-----')
  console.log(listaDeProdutos)
  listarClientesProdutos()
  lista.prepend(titulo)

})

function listarClientesProdutos() {
  const arr = listaDeProdutos.reduce((acc, cur) => {
    return acc += `<li><b>${cur.name}</b> ${cur.products.join(', ')}</li>`
  }, '')
  lista.innerHTML = arr
}

function listarClientes() {
  clienteName.innerHTML = '<option value="">Selecione o cliente</option>'
  const arr = listaDeClientes.reduce((acc, cur) => {
    return acc += `<option value='${cur}'>${cur}</option>`
  }, '')
  clienteName.innerHTML += arr
}
