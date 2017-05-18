//togle menu active/inactive
function toggleMenu(active) {
  return {
    type: 'TOGGLE_MENU',
    active
  }
}

//load data to list

function loadData(active, items) {
  return {
    type: 'LOAD_DATA',
    active,
    items
  }
}

