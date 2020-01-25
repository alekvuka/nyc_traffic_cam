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
     return {
       ...state,
       cameras: state.cameras.concat(action.cameras),
       loading: false
     }

     case 'REMOVE_CAMERA':
     debugger 
      return state

     case 'RESET':
      return {
        ...state,
        cameras: [],
        loading: false
      }

     default:
      return state;
   }
};
