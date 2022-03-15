const toggleButton = document.getElementById('toggle-button')
// const body = document.getElementById('body')
const header = document.getElementById('topbar')
const footer = document.getElementById('footer')
const sidebard = document.getElementById('navigation')
const mainDark = document.getElementById('main')
const breadcrumb = document.getElementById('breadcrumb')

toggleButton.addEventListener('change', () => {
    // document.body.classList.toggle('dark')
    header.classList.toggle('dark')
    mainDark.classList.toggle('dark')
    sidebard.classList.toggle('dark')
    footer.classList.toggle('dark')
    breadcrumb.classList.toggle('dark')
  })