const changeStatus = (event) => {
  // click on button
  let buttonWeClickedOn = event.target
  //  use the button to find the icon
  let icon = buttonWeClickedOn.previousElementSibling
  // change classname of the icon
  // if the icon has the class -check, remove it, add -bookmark
  if (icon.classList.contains('bi-bookmark-check')) {
    icon.classList.remove('bi-bookmark-check')
    icon.classList.add('bi-bookmark')
    buttonWeClickedOn.innerText = 'Want to read it'
  } else {
    icon.classList.remove('bi-bookmark')
    icon.classList.add('bi-bookmark-check')
    buttonWeClickedOn.innerText = 'Have read it'
  }
}

export default changeStatus