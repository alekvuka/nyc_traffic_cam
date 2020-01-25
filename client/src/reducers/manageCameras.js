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
      const cams = state.cameras.filter(camera => camera.url !== action.url)
      return {
        ...state,
        cameras: cams,
        loading: false
      }

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
