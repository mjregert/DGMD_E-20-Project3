$(document).ready(function() {

    $( function() {
        if ($('#dob').prop('type') != 'date') {
            $( "#dob" ).datepicker();
        }
    });

    $('#email').focusout(function(){
        if ($('#email').val().length == 0) {
            $('#emailSuccess').addAttr('hidden');
            $('#emailFail').removeAttr('hidden');
        } else {
            // validate here
            $('#emailFail').addAttr('hidden');
            $('#emailSuccess').removeAttr('hidden');
        }
    });

    $('#subscribe').click(function() {
        //if (this.checked) {
            $('#genreFieldSet').animate({
                opacity: 1,
                hidden: hidden
            },200, 'swing');
        //} else {
        //}
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
