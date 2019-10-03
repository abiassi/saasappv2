/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');
//Set Stripe public key
  Stripe.setPublisherKey( $('meta[name="stripe-key"]').attr('content') );

//When user clicks form submit btn
  submitBtn.click(function(event){
    event.preventDefault();
//prevent default submission behavior.

//Collect credit card fields.
  var ccNum = $('#card_number').val(), 
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
      
//Send the card info to Stripe.
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
  }, stripeResponseHandler);
  });

//Stripe will return a card token.
//Inject card token as hidden field into form.
//Submit form to our Rails app.
});