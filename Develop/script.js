//declare variables for
var rootEl = $('#root');
var inputFill;




//append a span under the title that shows current day and time
var dateTimeNow = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().format('h a')
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
  for (var i = 0; i < hours.length; i++) {

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
    inputFill.addClass('form-control').attr('id', 'input-' + i).attr('data-color', 'future').attr('name', 'taskInput');


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

    function renderColors() {
      if (currentHour == hours[i]) {
        inputFill.attr('data-color', 'present');

      }
    }

    // function submitTask(event) {
    //   event.preventDefault();
    //   var thisTask = inputFill.val();
    //   localStorage.setItem('task' , thisTask);

    // }

    function submitTask0(event) {
      event.preventDefault();
      var input0 = $('#input-0').val();
      localStorage.setItem('9 am', input0);
    }

    function submitTask1(event) {
      event.preventDefault();
      var input1 = $('#input-1').val();
      localStorage.setItem('10 am', input1);
    }

    function submitTask2(event) {
      event.preventDefault();
      var input2 = $('#input-2').val();
      localStorage.setItem('11 am', input2);
    }

    function submitTask3(event) {
      event.preventDefault();
      var input3 = $('#input-3').val();
      localStorage.setItem('12 pm', input3);
    }

    function submitTask4(event) {
      event.preventDefault();
      var input4 = $('#input-4').val();
      localStorage.setItem('1 pm', input4);
    }

    function submitTask5(event) {
      event.preventDefault();
      var input5 = $('#input-5').val();
      localStorage.setItem('2 pm', input5);
    }

    function submitTask6(event) {
      event.preventDefault();
      var input6 = $('#input-6').val();
      localStorage.setItem('3 pm', input6);
    }

    function submitTask7(event) {
      event.preventDefault();
      var input7 = $('#input-7').val();
      localStorage.setItem('4 pm', input7);
    }

    function submitTask8(event) {
      event.preventDefault();
      var input8 = $('#input-8').val();
      localStorage.setItem('5 pm', input8);
    }



    $('#form-0').on('submit', submitTask0);
    $('#form-1').on('submit', submitTask1);
    $('#form-2').on('submit', submitTask2);
    $('#form-3').on('submit', submitTask3);
    $('#form-4').on('submit', submitTask4);
    $('#form-5').on('submit', submitTask5);
    $('#form-6').on('submit', submitTask6);
    $('#form-7').on('submit', submitTask7);
    $('#form-8').on('submit', submitTask8);

    renderColors();



    // function renderColors() {
    //   if (currentHour.isBefore(hours[i])) {
    //     inputFill.data('color', 'future');
    //   } else if (currentHour.isAfter(hours[i])) {
    //     inputFill.data('color', 'past');
    //   } else {
    //     inputFill.data.('color', 'present');
    //   }
    // }

  }
}

//for each i append a form with label and button. label text = array[i]
//label to be assigned class .hour and id  #i hour
//button to be assigned class .saveBtn
//

renderHours();