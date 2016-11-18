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
    // Click event handler for the subscribe checkbox
    $('#subscribe').click(function() {
        if (this.checked) {
            $('#genreFieldSet').show(500);
        } else {
            $('#genreFieldSet').hide(500);
        }
    });

    //------------------------------------------------------------------------//
    // Click event handler for the submit checkbox
    $('#submit').click(function() {
        alert("Account created!");
    }); // End submit click

    //------------------------------------------------------------------------//
    // Hover event handlers for the arrows
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

    //------------------------------------------------------------------------//
    // Click event handlers for the arrows
    $('.arrow').first().click(function() {
        selectedAvatar--;
        if (selectedAvatar == -1) {
            selectedAvatar = avatars.length -1;
        }
        $('#avatarImg').fadeOut( "slow", function() {
            $('#avatarImg').attr('src',avatars[selectedAvatar]);
            $('#avatarImg').fadeIn( "slow", function() {
             //Done
            });
        });
    });

    $('.arrow').last().click(function() {
        selectedAvatar++;
        if (selectedAvatar == avatars.length) {
            selectedAvatar = 0;
        }
        $('#avatarImg').fadeOut( "slow", function() {
            $('#avatarImg').attr('src',avatars[selectedAvatar]);
            $('#avatarImg').fadeIn( "slow", function() {
             //Done
            });
        });
    });

    //------------------------------------------------------------------------//
    // Click event for the reset button
    $('#reset').click(function() {
        selectedAvatar = 0;
        $('#avatarImg').attr('src',avatars[selectedAvatar]);
    });

}); // End ready
