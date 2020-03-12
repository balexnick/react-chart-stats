import {requestHandler} from 'utils/request-handler'
// import * as CONSTANT from 'constant'


export const getTodayStat = () => {
  return dispatch => {
    const options = {
      type: "get",
      url: `stat/hours/0`
    };

    const cb =  (response) => {
      console.log(response)
    }

    requestHandler({options, cb})
  }
}