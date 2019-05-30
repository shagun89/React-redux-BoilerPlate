
import { Constants } from '../constants';

const initialState = {
    // test:5,
    // response:{},
    // Postresponse:{},
    // visibility:false,
    // divState: null,
    addanchorEl: null,
    anchorEl: null,
    edit: null,
    formData : [],
    rejected : [],
    pending : [],
    development : [],
    testing : [],
    production : [],
    specificId: null,
    selectedElement: null,
    updateData: {},
    deleteData: null,
    loginData: null,
    registerData : null,
    isRegister :  null,
    isLogin : null,
    token : null
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
                    formData : action.formData,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production
                }
        case Constants.EXPAND_TOGGLE:
                return {...state,
                    expanded :  action.expanded,
                    selectedElement: action.selectedElement,
                    allElements: action.allElements,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production
                }
        case Constants.RECEIVED_DATA:
                return {...state,
                    receiveData :  action.receiveData
                }
        case Constants.EDIT_TASK:
                return {...state,
                    edit :  action.edit,
                    selectedElement: action.selectedElement,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production
                }
        case Constants.UPDATED_DATA:
                return {...state,
                    updateData :  action.updateData
                }
        case Constants.DELETED_DATA:
                return {...state,
                    deleteData :  action.deleteData
                }
        case Constants.LOGIN:
                return {...state,
                    loginData :  action.loginData,
                    token: action.token
                }
        case Constants.REGISTER:
                return {...state,
                    registerData :  action.registerData,
                    
                }
        case Constants.SHOW_REGISTER:
                return {...state,
                    isRegister :  action.isRegister,
                    
                }
        case Constants.SHOW_LOGIN:
                return {...state,
                    isLogin :  action.isLogin,
                }
        
        default:
            return state;
    }
}
