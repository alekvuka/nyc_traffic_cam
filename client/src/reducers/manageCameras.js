export default function ManageCameras(state = {
  cameras: [],
}, action) {
   switch (action.type) {
     case 'ADD_CAMERAS':
       return { ...state, bands: [...state.bands, action.band] }

     case 'RESET':
        return state

     default:
       return state;
   }
};
