import * as CONSTANT from "constant";
import { requestHandler } from 'utils/request-handler'
import { getTrafficDataByDomain } from "utils/getChartDataByDomain";
import { toPercent } from "utils/toPercent";
import { sortLow } from "utils/sort";
import country from "country-list-js";

export const getTraffic = (data) => {
  return dispatch => {
    const options = {
      type: "get",
      url: `history/period?datefrom=${data[0]}&dateto=${data[1]}`
    };
    dispatch({ type: CONSTANT.LOADER, payload: true });
		requestHandler({options})
      .then(response => {
        const { result } = response.data;
        dispatch({ type: CONSTANT.LOADER, payload: false });
        dispatch({
          type: CONSTANT.DEFAULT_TRAFFIC,
          payload: getTrafficDataByDomain(result)
        });
      })
  };
}

export function getChartTraffic(data) {
  return dispatch => {
    const options = {
      type: "get",
      url: `geo/period?datefrom=${data[0]}&dateto=${data[1]}`
    };
    dispatch({ type: CONSTANT.LOADER, payload: true });
    requestHandler({options})
      .then(response => {
        dispatch({ type: CONSTANT.LOADER, payload: false });
				const { data } = response.data.result;
        const traffic = Object.keys(data).map(item => data[item]);
        const dataChart = Object.keys(data).map((item, i) => {
					return {
						y: toPercent(traffic)[i],
						label: country.findByIso2(item) ? country.findByIso2(item).name : item,
					};
        });
				const dataList = Object.keys(data).map((item, i) => {
					return {
            code: item,
						country: `${country.findByIso2(item) ? country.findByIso2(item).name : item}`,
            traffic: data[item],
            percent: toPercent(traffic)[i]
					}
        })
        sortLow(dataList, 'traffic')
        dispatch({ type: CONSTANT.CHART_TRAFFIC, payload: {dataChart, dataList}});
      })
      .catch(err => console.log(err));
  };
}