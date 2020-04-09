import moment from 'moment';

export const daysInMonth = function(month, year) {
	return new Date(year, month, 0).getDate();
};
export const getDates = function(startDate, endDate) {
	var currentDate = startDate;
	var dates = [];
	while (moment(currentDate).unix() <= moment(endDate).unix()) {
		dates.push(currentDate);
		currentDate = moment(currentDate)
			.add(1, "days")
			.format("YYYY-MM-DD");
	}
	return dates;
};
export const normalizeDate = function(labels) {
	var startDate = labels[0];
	var daysNumber =
		daysInMonth(
			moment(startDate).format("MM"),
			moment(startDate).format("YYYY")
		) - 1;

	var datesRange = getDates(
		startDate,
		moment(startDate)
			.add(daysNumber, "days")
			.format("YYYY-MM-DD")
	);
	return datesRange
};