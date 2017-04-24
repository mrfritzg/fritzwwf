//Selecting the donation amount
dntAmnt = function(){
    
    var amt;
    if( $("input[name=amount]:checked").length > 0  ) {
        amt = $("input[name=amount]:checked").val();
        
    }else {
        amt = $("#dn-other").val();
    }
    
    return amt;
    
};
//If Donation amount radio buttons are selected, disable
// the ability to put in OTHER amount
$("input[name=amount]").click( function (){
    $("input[name=dnmt5]").prop('disabled', true);
//    $("#dn-other").prop('disabled', true);
});


//$("#dn-other").click( function (){
////    $("input[name=dnmt5]").prop('disabled', false);
//    $("#dn-other").prop('disabled', false);
    
    
//});

//Define the click action for the button
$(".dnt-btn").click( function () {
    fname = $("#fn").val();
    lname = $('#ln').val();
    amount = dntAmnt();
    msg = "Thank you "+fname +" "+lname+" for your generous donation of $"+amount+"!!";
    $('.thankyoumsg').html('<p>'+msg+'</p>');
    $('.thankyou').css( {
        display:'block'
        }
    );
    
});

// Close the thank you messsage after it has been displayed 
//and reset the form
$(".thankyou-btn").click( function () {
    $('.thankyou').css( {
        display:'none'
        }
    );
    document.getElementById("donate-form").reset();
});