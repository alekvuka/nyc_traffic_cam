export default function ManageCameras(state = {
  cameras: [], avenues: [],
}, action) {
   switch (action.type) {

     case 'ADD_AVENUES':
      return {
        ...state,
        avenues: action.avenues,
        requestCreated: ""
      }

     case 'ADD_CAMERAS':
     return {
       ...state,
       cameras: action.cameras,
     }

     case 'REMOVE_CAMERA':
      const cams = state.cameras.filter(camera => camera.url !== action.url)
      return {
        ...state,
        cameras: cams,
      }

      case 'REQUEST_SENT':
        return {
          ...state,
          requestCreated: action.data,
        }

      case "REQUEST_ALERT_SEEN":
        return {
          ...state,
          requestCreated: ""
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
