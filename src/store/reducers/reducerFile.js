import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../util/Constants'

const initialState= {
    selectedFile: null,
    id: 'file',
    disabled:true,
    selectedFileName:'',
    selectedFileType:'',
    data : [],
    associateData: [],
    budgetData: [],
    error: '',
    message:''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ASSOCIATE_DATA:
            return{
                ...state,
                associateData: action.data
            };
        case actionTypes.FETCH_BUDGET_DATA:
            return{
                ...state,
                budgetData: action.data
            };
        case actionTypes.SET_ASSOCIATE_DATA:
            return{
                ...state,
                associateData: action.data,
                message:constants.SUCCESS_MESSAGE
            };
        case actionTypes.SET_BUDGET_DATA:
            return{
                ...state,
                budgetData: action.data,
                message:constants.SUCCESS_MESSAGE
            };
        case actionTypes.SET_ASSOCIATE_DELTA:
            return{
                ...state,
                associateData: action.data,
                message: constants.SUCCESS_MESSAGE
            };
        case actionTypes.SET_DATA:
            return{
                ...state,
                data: action.data
            };
        case actionTypes.SET_SELECTED_FILE_NAME:
            return{
                ...state,
                selectedFileName: action.fileName,
                disabled: action.disabled,
                message:''
            };
        case actionTypes.SET_SELECTED_FILE:
            return{
                ...state,
                selectedFile: action.file
            };
        case actionTypes.SET_SELECTED_FILE_TYPE:
            return{
                ...state,
                selectedFileType: action.selectedFileType,
                disabled: action.disabled
            };
        case actionTypes.SET_ERROR:
            return{
                ...state,
                error: action.error
            };

        default:
            return state;
    }


}

export default  reducer;