//togle menu active/inactive
export function toggleMenu(active) {
  return {
    type: 'TOGGLE_MENU',
    active
  }
}

//load data to list

export function loadData(active, items) {
  return {
    type: 'LOAD_DATA',
    active,
    items
  }
}

