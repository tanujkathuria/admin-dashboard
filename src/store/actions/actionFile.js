import * as actionTypes from './actionTypes';
import Axios from '../../Axios';

export const setAssociateData = (data) => {
    return dispatch => {
        Axios.post('/saveAssociate', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                dispatch(setAssociateDataSuccess(response.data))
            })
            .catch(error => {
                dispatch(setError(error.message));
            })
    }
}

export const setAssociateDataSuccess = (data) => {
    return {
        type: actionTypes.SET_ASSOCIATE_DATA,
        data: data
    }
}

export const setBudgetDataSuccess = (data) => {
    return {
        type: actionTypes.SET_BUDGET_DATA,
        data: data
    }
}

export const setBudgetData = (data) => {
    return dispatch => {
        Axios.post('/saveBudget', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                dispatch(setBudgetDataSuccess(response.data))
            })
            .catch(error => {
                dispatch(setError(error.message));
            })
    }
}
export const setAssociateDeltaSuccess = (data) => {
    return {
        type: actionTypes.SET_ASSOCIATE_DELTA,
        data: data
    }
}

export const setAssociateDelta = (data) => {
    return dispatch => {
        Axios.put('/appendAssociate', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                Axios.get('/getAssociateData')
                    .then(
                        response => {
                            dispatch(setAssociateDeltaSuccess(response.data));
                        })
                    .catch(
                        error => {
                            dispatch(setError(error.message));
                        }
                    )
            })
            .catch(error => {
                console.log(error.message);
                dispatch(setError(error.message));
            })
    }

}


export const fetchAssociateDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ASSOCIATE_DATA,
        data: data
    }
}

export const fetchAssociateData = () => {
     return dispatch => {
         Axios.get('/getAssociateData')
             .then(
                 response => {
                     dispatch(fetchAssociateDataSuccess(response.data))
                 })
             .catch(
                 error => {
                     dispatch(setError(error.message));
                 }
             )
         }
     }


export const fetchBudgetData = () => {
    return dispatch => {
        Axios.get('/getBudgetData')
            .then(
                response => {
                    dispatch(fetchBudgetDataSuccess(response.data))
                })
            .catch(
                error => {
                    dispatch(setError(error.message));
                }
            )
    }
}


export const fetchBudgetDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BUDGET_DATA,
        data: data
    }
}


export const setData = (data) => {
    return {
        type: actionTypes.SET_DATA,
        data: data
    }
}

export const setSelectedFileName = (fileName, disabled) => {
    return {
        type: actionTypes.SET_SELECTED_FILE_NAME,
        fileName: fileName,
        disabled: disabled
    }
}

export const setSelectedFile = (file) => {
    return {
        type: actionTypes.SET_SELECTED_FILE,
        file: file,
    }
}

export const setSelectedFileType = (selectedFileType, disabled) => {
    return {
        type: actionTypes.SET_SELECTED_FILE_TYPE,
        selectedFileType: selectedFileType,
        disabled:disabled
    }
}


export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error: error,
    }
}