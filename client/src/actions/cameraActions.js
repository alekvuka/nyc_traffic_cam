export const fetchCameras = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CAMERAS'})
    fetch('/cameras/').then(response => {
      return response.json()
    }).then(data => {
      dispatch({ type: 'ADD_CAMERAS', cameras: data })
    })
  }
}
