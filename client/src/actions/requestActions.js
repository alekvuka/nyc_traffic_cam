export const postRequest = (req) => {



   return (dispatch) => {
     dispatch({ type: 'SENDING_REQUEST'})
     fetch(`/request`, {
       method: 'POST',
       headers: {
          "Content-Type": "application/json"
        },
       body: JSON.stringify(req)
     }).then(response => {
       return response.json()
     }).then(data => {
       dispatch({ type: 'REQUEST_SENT' })
     }).catch((error) => {
         console.error('Error:', error);
       });
   }
  }
