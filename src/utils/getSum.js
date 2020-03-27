export const calculateAllDomainsData = (domainsData) => {
  let revenue = 0;
  let impressions = 0;
  let clicks = 0;
  Object.keys(domainsData).forEach(function(domain) {
    revenue += domainsData[domain].revenue;
    impressions += domainsData[domain].impressions;
    clicks += domainsData[domain].clicks;
  });
  return {
    revenue: `$${revenue}`,
    impressions,
    clicks
  }
}

export const calculateTotalRevenueForDomains = (domainsData) => {
  var totalRevenue = 0;
  Object.keys(domainsData).forEach(function(domain) {
    totalRevenue += domainsData[domain].revenue;
  });

  return totalRevenue;
}

export const getSumOfMetricsByDomains = (domainsMetricsSummary) => {
  let result = {}
  Object.keys(domainsMetricsSummary).forEach((period) => {
    let revenues = 0
    let impressions = 0
    let clicks = 0
    Object.keys(domainsMetricsSummary[period]).forEach((item, domain) => {
      revenues += domainsMetricsSummary[period][domain].revenue
      impressions += domainsMetricsSummary[period][domain].impressions
      clicks += +domainsMetricsSummary[period][domain].clicks
    })
    result = {
      ...result,
      [period]: {
        revenue: Number.isInteger(revenues)
          ? revenues
          : +(Math.round(revenues * 100) / 100).toFixed(2),
        impressions: Number.isInteger(impressions)
          ? impressions
          : +(Math.round(impressions * 100) / 100).toFixed(2),
        clicks: Number.isInteger(clicks)
          ? clicks
          : +(Math.round(clicks * 100) / 100).toFixed(2)
      }
    }
  })
  return result
};