const menuItem = document.querySelectorAll(".sidenav a");

menuItem.forEach(el => {
  if (el.getAttribute('href') === (location.hash || '#home')) {
    el.classList.add("active")
  }
  el.addEventListener("click", e => {
    menuItem.forEach(el => el.classList.remove("active"))
    e.target.classList.add("active")
  })
})
