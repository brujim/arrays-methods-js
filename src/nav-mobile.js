const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', toggleMenu)

const closeMenu = document.getElementById('close-menu')
closeMenu.addEventListener('click', toggleMenu)

function toggleMenu() {

  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

function toggleModal() {
  
  const modal = document.getElementById('bg')
  modal.classList.toggle('active')
 
  if (nav.classList.value === 'active') {
    nav.classList.toggle('active')
  }
}

function closeModal() {
  const modal = document.getElementById('bg')  
  modal.classList.toggle('active')
}
