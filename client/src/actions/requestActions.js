export const postRequest = (req) => {

  const data = { request: req };

  //debugger

  // return (dispatch) => {
  //   dispatch({ type: 'SENDING_REQUEST'})
  //   fetch(`/request`, {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   }).then(response => {
  //     return response.json()
  //   }).then(data => {
  //     dispatch({ type: 'REQUEST_SENT' })
  //   }).catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }
}
