
export const FETCHING_START = 'FETCHING_START'
export const ERROR = 'ERROR'
export const FETCHING_STOP = 'FETCHING_STOP'

export const  fetchingNow = () =>{
    return{ type: FETCHING_START, isFetching:true};
}

export const  fetchingStop = () =>{
    return{ type: FETCHING_STOP, isFetching:false};
}

export const thereIsAnError = () =>{
    return{tupe: ERROR}
}