/**
 * Created by Jason Wilson on 7/19/2016.
 */
var shipping_time = 5;

$(document).ready(function() {

    function apply_event_handlers() {


        $('input').keydown(function (validate_keydown) {

        });

        $('radio').on('click', function (change_shipping_type) {

        });

        $('calculate').on('click', function (display_shipping) {

        });
    }
    $('input').on('keypress', validate_keydown);

    function validate_keydown(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        //basically this says anything that's not 0-9 will return false and not be displayed. decimal point is 46, so if
        //decimal point is used it returns true.
        if (charCode != 46 && charCode > 31
                //48 thru 57 is the charCode for numbers 0-9 on keyboard, so if its less then n48 or greater then 57 then
                //its not 0-9
            && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }

    function change_shipping_type() {
        shipping_time = document.getElementById('radio').value;
    }

});
