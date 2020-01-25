export default function ManageCameras(state = {
  cameras: [], avenues: [],
}, action) {
   switch (action.type) {

     case 'ADD_AVENUES':
      return {
        ...state,
        avenues: action.avenues,
        loading: false
      }

     case 'ADD_CAMERAS':
      debugger
     return {
       ...state,
       //cameras: cameras.conct(action.avenues),
       loading: false
     }


     case 'RESET':
      return state

     default:
      return state;
   }
};
