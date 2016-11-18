$(document).ready(function() {

    var avatars = ["img/avatar1.png","img/avatar2.png","img/avatar3.png","img/avatar4.png","img/avatar5.png","img/avatar6.png"];
    var selectedAvatar = 0;

    // If the browser does not support the HTML5 "date" type of input, add a JQuery datepicker
    $( function() {
        if ($('#dob').prop('type') != 'date') {
            $( "#dob" ).datepicker();
        }
    }); // end annyomous function for DPB picker

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

    $('#dob').focus(function() {
    });


    $('#submit').click(function() {
        alert("Account created!");
    }); // End submit click

    $('#leftArrow').hover(function() {
        $( this ).css({'opacity' : '1.0'});
    }, function() {
        $( this ).css({'opacity' : '0.4'});
    });

    $('#rightArrow').hover(function() {
        $( this ).css({'opacity' : '1.0'});
    }, function() {
        $( this ).css({'opacity' : '0.4'});
    });

    $('#leftArrow').click(function() {
        selectedAvatar--;
        if (selectedAvatar == -1) {
            selectedAvatar = avatars.length -1;
        }
        $('#avatarImg').attr('src',avatars[selectedAvatar]);
    });

    $('#rightArrow').click(function() {
        selectedAvatar++;
        if (selectedAvatar == avatars.length) {
            selectedAvatar = 0;
        }
        $('#avatarImg').attr('src',avatars[selectedAvatar]);
    });

    $('#reset').click(function() {
        selectedAvatar = 0;
        $('#avatarImg').attr('src',avatars[selectedAvatar]);
    });


}); // End ready
