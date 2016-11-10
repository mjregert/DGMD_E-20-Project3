$(document).ready(function() {

    // If the browser does not support the HTML5 "date" type of input, add a JQuery datepicker
    $( function() {
        if ($('#dob').prop('type') != 'date') {
            $( "#dob" ).datepicker();
        }
    }); // end annyomous function for DPB picker

    //------------------------------------------------------------------------//
/*
    $('#email').focusout(function() {
        alert('FocusOutCalled');
        // Add proper validation here
        if (this.val().length == 0) {
            alert('add');
        } else {
            alert('remove');
        }
    });
*/
    //------------------------------------------------------------------------//
    // Example of using a mouse click event
    // Event handler for the subscribe checkbox
    $('#subscribe').click(function() {
        if (this.checked) {
            $('#genreFieldSet').show(500);
        } else {
            $('#genreFieldSet').hide(500);
        }
    });

    $('#dob').change(function() {
        // Validate that the date was put in correctly
        if($('#dob').val().length == 0) {
            $('label[for="dob"]').html('Please enter a valid date.');
        } else {
/*
        // We need to know if the data coming in is a DATE object or a STRING
        var dob = $('#dob').val();

        if ($('#dob').prop('type') == 'date') {
            var year = dob.substring(0,4);
            alert('DATE!' + year);
        } else {
            var date2 = date(dob);
            alert('STRING!' + dob);
*/
        }
    });


    $('#submit').click(function() {
        alert("submit clicked");
    }); // End submit click


}); // End ready
