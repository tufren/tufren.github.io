const scriptURL = 'https://script.google.com/macros/s/AKfycbyH14N8P2klKzx1JGD_wsQQlW7GaK2JR2UWs6RB952CLGwbUrUR3kCx02wTxX27JTJY/exec'
const form = document.forms['Store']

export const Store = form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      form.reset()
      alert('Berhasil Terkirim')
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})