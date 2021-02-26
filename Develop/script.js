//declare variables for
var rootEl = $('#root');

//append a span under the title that shows current day and time
var dateTimeNow = moment().format('dddd, MMMM Do YYYY, h:mm a');
$('#currentDay').text(dateTimeNow);

//Create and Handle array with index of 7, each i is a seperate hour in work day 9-5

var hours = [
  '9 am',
  '10 am',
  '11 am',
  '12 am',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
]
//create a for loop for the array
function renderHours() {
  for ( var i = 0; i < hours.length; i++) {
    var hourRow = $('<div>');
    hourRow.addClass('row').attr('id', 'row-' + i);
    
    var hourCol = $('<div>');
    hourCol.addClass('col-sm-12 col-md-12 col-lg-12').attr('id', 'col-' + i);
    hourCol.text('this is a column');

    hourRow.append(hourCol);
    rootEl.append(hourRow);
  }

}
//for each i append a form with label and button. label text = array[i]
//label to be assigned class .hour and id  #i hour
//button to be assigned class .saveBtn
//

renderHours();