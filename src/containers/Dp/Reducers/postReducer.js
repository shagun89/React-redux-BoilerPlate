
import { Constants } from '../constants';

const initialState = {
    // test:5,
    // response:{},
    // Postresponse:{},
    // visibility:false,
    // divState: null,
    addanchorEl: null,
    anchorEl: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case Constants.TEST_VALUE:
        //         return{
        //             test: action.flag
        //         }
        // case Constants.API_CALL_TEST:
        //         return{
        //             response: action.response,
        //         }
        // case Constants.POST_API_RESPONSE:
        //         return{
        //             Postresponse: action.data
        //         }
        // case Constants.SHOW_LOADER:
        //         return{
        //             visibility:action.visibility
        //         }
        // case Constants.HIDE_LOADER:
        //         return{
        //             visibility:action.visibility
        //         }
        // case Constants.DIV_STATE_TOGGLE:
        //         return{...state,
        //             divState: action.divState
        //         }
        case Constants.MENU_STATE_TOGGLE:
                return{...state,
                    anchorEl: action.anchorEl
                }
        case Constants.ADDMENU_STATE_TOGGLE:
                return{...state,
                    addanchorEl: action.addanchorEl
                }
        case Constants.ADDMENU_STATE_OPEN:
        console.log("Reducer value: ", action.addanchorEl)
                return{...state,
                    addanchorEl: action.addanchorEl
                }
        case Constants.MENU_STATE_OPEN:
        console.log("reducer value: ", action.anchorEl);
                return{...state,
                    anchorEl: action.anchorEl
               }
        case Constants.FORM_TOGGLE:
               return{...state,
                    openForm : action.openForm,
                    taskStatus : action.taskStatus
               }
        case Constants.TITLE_CHANGE:
                return{...state,
                    title: action.title
                }
        case Constants.DESC_CHANGE:
                return{...state,
                    description: action.description
                }
        case Constants.STATUS_CHANGE:
                return{...state,
                    stat: action.stat
                }
        
        case Constants.TOGGLE_CLOSE:
                return{...state,
                    toggle: action.toggle
                }
        case Constants.FORM_DATA:
                return{...state,
                    formData : action.formData
                }
        case Constants.UPDATE_TOGGLE:
                return {...state,
                    openUpdate :  action.openUpdate
                }
        case Constants.RECEIVED_DATA:
                return {...state,
                    receiveData :  action.receiveData
                }
        default:
            return state;
    }
}
