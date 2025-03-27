const topMenu = document.getElementById('top-menu')
const dropdown = document.getElementById('dropdown')

document.addEventListener('click', (e) => {
    if (dropdown.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('top-menu-expanded')
    } else {
    if (topMenu.classList.contains('top-menu-expanded')){
        topMenu.classList.remove('top-menu-expanded')
        topMenu.classList.add('hidden')
    }
    }
})
