import React from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components'

import { browserHistory } from "index";
import Today from 'components/today/Today'
import Loader from 'components/loader/Loader'
import Yesterday from 'components/yesterday/Yesterday'
import LastWeek from 'components/last-week/LastWeek'
import LastMonth from 'components/last-month/LastMoth'
import ThisMonth from 'components/this-month/ThisMonth'
import Traffic from 'components/traffic/Traffic'
import Tab from 'cummon/Tabs'

import TotalRevenue from 'components/total-stats/TotalRevenue'

const TODAY = '/today';
const YESTERDAY = '/yesterday';
const LASTWEEK = '/last-week';
const LASTMONTH = '/last-month';
const THISMONTH = '/this-month'
const TRAFFIC = '/traffic';

const CONTENT_LIST = [TODAY, YESTERDAY, LASTWEEK, LASTMONTH, THISMONTH, TRAFFIC]

const HomePage = ({match}) => {
  const hasContent = CONTENT_LIST.includes(match.url);
  const content = {
    [TODAY]: <Today />,
    [YESTERDAY]: <Yesterday />,
    [LASTWEEK]: <LastWeek />,
    [LASTMONTH]: <LastMonth />,
    [THISMONTH]: <ThisMonth />,
    [TRAFFIC]: <Traffic />,
  };
  return (
    <Container>
      <TabList>
        <Tab 
          text={'Today'}
          setClick={() => browserHistory.push('/today')}
          isActive={match.url === TODAY}
        />
        <Tab 
          text={'Yesterday'}
          setClick={() => browserHistory.push('/yesterday')}
          isActive={match.url === YESTERDAY}
        />
        <Tab 
          text={'Last 7 days'}
          setClick={() => browserHistory.push('/last-week')}
          isActive={match.url === LASTWEEK}
        />
        <Tab 
          text={'Last 30 days'}
          setClick={() => browserHistory.push('/last-month')}
          isActive={match.url === LASTMONTH}
        />
        <Tab 
          text={'This month'}
          setClick={() => browserHistory.push('/this-month')}
          isActive={match.url === THISMONTH}
        />
        <Tab 
          text={'Traffic'}
          setClick={() => browserHistory.push('/traffic')}
          isActive={match.url === TRAFFIC}
        />
      </TabList>
      <TotalRevenue/>

      {hasContent && content[match.url]}
      <Loader/>
    </Container>
  )
}

export default withRouter(HomePage)


const Container = styled.div`
  padding: 15px;
`
const TabList = styled.ul`
  display: flex;
  border-bottom: 1px solid #cfcfcf;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
`