export const fetchAvenues = () => {
  console.log("c")
  return (dispatch) => {
    dispatch({ type: 'LOADING_AVENUES'})
    fetch('/avenues').then(response => {
      return response.json()
    }).then(data => {
      console.log("d")
      dispatch({ type: 'ADD_AVENUES', avenues: data })
    })
  }
  console.log("e")
}
