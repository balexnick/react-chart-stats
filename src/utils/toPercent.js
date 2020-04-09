export const toPercent = (list) => {
    var total = 0;
    for(var i = 0; i < list.length; i++) {
        total += list[i];
    }
    return list.map(function(x) {
        return parseFloat((x * 100 / total).toFixed(1));
    });
  }
  