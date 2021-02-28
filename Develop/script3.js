var rootEl = $('#root');

var dateTimeNow = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().format('h a')
$('#currentDay').text(dateTimeNow);

//create block for each hour
  //create eventlistender for eache block