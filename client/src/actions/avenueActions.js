export const fetchAvenues = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_AVENUES'})
    fetch('/avenues').then(response => {
      return response.json()
    }).then(data => {
      dispatch({ type: 'ADD_AVENUES', avenues: data })
    })
  }
}
