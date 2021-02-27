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
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
];

//create a for loop for the array
function renderHours() {
  for ( var i = 0; i < hours.length; i++) {

    var hourRow = $('<div>');
    hourRow.addClass('row time-block').attr('id', 'row-' + i);
    
    var hourCol = $('<div>');
    hourCol.addClass('col-sm-12 col-md-12 col-lg-12').attr('id', 'col-' + i);

    var hourForm = $('<form>');
    hourForm.attr('id', 'form-' + i);

    var formRow = $('<div>');
    formRow.addClass('mb-3 row').attr('id', 'form-row-' + i);

    var inputGroup = $('<div>');
    inputGroup.addClass('input-group').attr('id', 'input-group-' + i);

    var inputPrepend = $('<div>');
    inputPrepend.addClass('input-group-prepend').attr('id', 'input-group-prepend-' + i);

    var inputLabel = $('<label>');
    inputLabel.addClass('input-group-text hour').text(hours[i]);

    var inputFill = $('<textarea>');
    inputFill.addClass('form-control present').attr('id', 'input-' + i);

    var inputAppend = $('<div>');
    inputAppend.addClass('input-group-append').attr('id', 'input-group-append-' + i);

    var inputSubmit = $('<button>');
    inputSubmit.addClass('btn btn-primary saveBtn').attr('type', 'submit').attr('id', 'input-submit-' + i).text('save');

    inputPrepend.append(inputLabel);
    inputAppend.append(inputSubmit);

    inputGroup.append(inputPrepend);
    inputGroup.append(inputFill);
    inputGroup.append(inputAppend);

    formRow.append(inputGroup);
    hourForm.append(formRow);
    hourCol.append(hourForm);
    hourRow.append(hourCol);
    rootEl.append(hourRow);
  }

}
//for each i append a form with label and button. label text = array[i]
//label to be assigned class .hour and id  #i hour
//button to be assigned class .saveBtn
//

renderHours();