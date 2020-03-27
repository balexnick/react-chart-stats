import * as CONSTANT from 'constant'
export const initialState = {
  [CONSTANT.LOADER]: false,
  [CONSTANT.TOTAL_REVENUE_STAT]: {},
  [CONSTANT.GIF_LOADER]: false,
  [CONSTANT.CHART_DATA_SUM]: {}
};

export function rootReduser(state = initialState, action) {
  switch(action.type){
    case CONSTANT.LOADER:
			return {
				...state,
				[CONSTANT.LOADER]: action.payload
      }
    case CONSTANT.TOTAL_REVENUE_STAT:
      return {
        ...state,
        [CONSTANT.TOTAL_REVENUE_STAT]: action.payload
      }
    case CONSTANT.GIF_LOADER:
      return {
        ...state,
        [CONSTANT.GIF_LOADER]: action.payload
      }
    case CONSTANT.CHART_DATA_SUM:
      return {
        ...state,
        [CONSTANT.CHART_DATA_SUM]: action.payload
      } 
  default:
      return state;
  }
}