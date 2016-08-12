/**
 * Created by Jason Wilson on 7/19/2016.
 */
// var shipping_time = 5;

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
    //THIS KEYDOWN FUNCTION ISNT NECESSARY IF YOU JUST CHANGE INPUT "TYPE" IN HTML TO "NUMBER" INSTEAD OF "TEXT"//
    function validate_keydown(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        //basically this says anything that's not 0-9 will return false and not be displayed. decimal point is 46, so if
        //decimal point is used it returns true.
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
                //48 thru 57 is the charCode for numbers 0-9 on keyboard, so if its less then 48 or greater then 57 then
                //its not 0-9
    
            return false;
    
        return true;
    }

});


function calculate_shipping() {
    var weightInput = document.getElementById("weightinput").value;
    document.getElementById("pounds").innerHTML = weightInput + " lbs";
    var ounces = weightInput * 16;
    document.getElementById("ounces").innerHTML = ounces + " oz";
    if (ounces < 20) {
        shippingcost = ounces * 0.02;

    }
    else if (ounces > 20 && ounces < 32) {
        shippingcost = ounces * 0.10;
    }

    else {
        shippingcost = ounces * 0.20;
    }


    console.log("The cost for the package weight is: $" + shippingcost);

}



function shippingDays() {
    days = parseInt(document.querySelector('input[name="days"]:checked').value);
    if (days === 5) {
        cost = shippingcost * 1;
    }else
    if(days === 3) {
        cost = shippingcost * 1.5;
    } else {
        cost = shippingcost * 2;
    }
    var date = new Date();
    var todays_day = date.getDay();
    if (todays_day === 0) {
        var new_date = todays_day + 1;
        date = new_date;
    }


    var arriving = new Date();
    arriving_date = arriving.setDate(arriving.getDate() + days);
    var day = arriving.getDay();
    if (day === 0) {
        arriving.setDate(arriving.getDate() + 1);

    }

    document.getElementById("departing").innerHTML = "<b>Departing: </b>" + date.toDateString();
    document.getElementById("arriving").innerHTML = "<b>Arriving: </b>" + arriving.toDateString();
    document.getElementById("type").innerHTML = "Type: " + days + " days";
    console.log("The cost for the delivery time chosen is: $" + cost);

}

function totalShippingCost() {
    var total_cost = cost + shippingcost;
    document.getElementById("shippingcost").innerHTML = "<b>Cost: $</b>" + total_cost.toFixed(2);

    console.log("Total cost for package is: $" + total_cost.toFixed(2));
}
