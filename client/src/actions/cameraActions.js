export const fetchCameras = (avenue) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CAMERAS'})
    fetch(`/cameras/${avenue}`).then(response => {
      return response.json()
    }).then(data => {
      dispatch({ type: 'ADD_CAMERAS', cameras: data })
    })
  }
}
