const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')

function btnCriptografar() {
  const textoEncriptado = encriptar(inputTexto.value)
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada
    }
  }
}

function encriptar() {}
