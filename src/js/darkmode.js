const toggleButton = document.getElementById('toggle-button')
const header = document.getElementById('header')
const footer = document.getElementById('footer')
const sidebard = document.getElementById('sidebar')
const mainDark = document.getElementById('main')
const breadcrumb = document.getElementById('breadcrumb')
const buttonDarkMode = document.getElementById('dark-mode')

toggleButton.addEventListener('change', () => {
    header.classList.toggle('dark')
    mainDark.classList.toggle('dark')
    sidebard.classList.toggle('dark')
    footer.classList.toggle('dark')
    breadcrumb.classList.toggle('dark')
    buttonDarkMode.classList.toggle('dark')
  })