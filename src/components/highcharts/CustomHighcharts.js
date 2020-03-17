import React from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import options from './config'

const CustomHighcharts = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default CustomHighcharts
