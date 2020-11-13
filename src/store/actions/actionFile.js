import * as actionTypes from './actionTypes';
import axios from "axios";


export const setAssociateData = (data) => {
    return dispatch => {
        axios.post('http://localhost:8080/saveAssociate', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                dispatch(setAssociateDataSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
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
        axios.post('http://localhost:8080/saveBudget', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                dispatch(setBudgetDataSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
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
        axios.put('http://localhost:8080/appendAssociate', JSON.stringify(data), {
            headers: {"Content-Type": "application/JSON"}
        }).then(
            response => {
                axios.get('http://localhost:8080/getAssociateData')
                    .then(
                        response => {
                            console.log(response.data);
                            dispatch(setAssociateDeltaSuccess(response.data));
                        })
                    .catch(
                        error => {
                            console.log(error);
                        }
                    )
            })
            .catch(error => {
                console.log(error);
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
         axios.get('http://localhost:8080/getAssociateData')
             .then(
                 response => {
                     dispatch(fetchAssociateDataSuccess(response.data))
                 })
             .catch(
                 error => {
                     console.log(error);
                 }
             )
         }
     }


export const fetchBudgetData = () => {
    return dispatch => {
        axios.get('http://localhost:8080/getBudgetData')
            .then(
                response => {
                    dispatch(fetchBudgetDataSuccess(response.data))
                })
            .catch(
                error => {
                    console.log(error);
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


