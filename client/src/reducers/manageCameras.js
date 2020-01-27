export default function ManageCameras(state = {
  cameras: [], avenues: [],
}, action) {
   switch (action.type) {

     case 'ADD_AVENUES':
      return {
        ...state,
        avenues: action.avenues,
        loading: false,
        requestSent: false,
        requestCreated: ""
      }

     case 'ADD_CAMERAS':
     return {
       ...state,
       cameras: action.cameras,
       loading: false,
     }

     case 'REMOVE_CAMERA':
      const cams = state.cameras.filter(camera => camera.url !== action.url)
      return {
        ...state,
        cameras: cams,
        loading: false
      }

    case 'REQUEST_SENT':
      return {
        ...state,
        requestCreated: action.data,
        requestSent: true
      }

    case "REQUEST_CONFIRMATION_SEEN":
      return {
        ...state,
        requestSent: false
      }

     case 'RESET':
      return {
        ...state,
        cameras: [],
        displayInputForm: false
      }

     default:
      return state;
   }
};
