import * as CONSTANT from 'constant'
export const initialState = {
  [CONSTANT.LOADER]: false,
  [CONSTANT.TOTAL_REVENUE_STAT]: {},
  [CONSTANT.GIF_LOADER]: false,
  [CONSTANT.CHART_DATA_SUM]: null,
  [CONSTANT.DOMAIN_DATA]: null,

  [CONSTANT.DEFAULT_TRAFFIC]: null,
  [CONSTANT.CHART_TRAFFIC]: null
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
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
    case CONSTANT.DOMAIN_DATA:
      return {
        ...state,
        [CONSTANT.DOMAIN_DATA]: action.payload
      }

      
    case CONSTANT.DEFAULT_TRAFFIC:
			return {
				...state,
				[CONSTANT.DEFAULT_TRAFFIC]: action.payload
      }
    
    case CONSTANT.CHART_TRAFFIC:
      return {
        ...state,
        [CONSTANT.CHART_TRAFFIC]: action.payload
      }
    default:
      return state;
  }
}