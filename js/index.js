  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ethnicity: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            gender: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            marital_status: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            first_time_parent: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            employment: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            SNAP: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            TANF: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            family_living: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            },
            income: {
                validators: {
                        notEmpty: {
                        message: 'Please supply your ethnicity'
                    }
                }
            }
        }})
        .on('success.form.bv', function(e) {
        //	window.location.replace("http://stackoverflow.com");
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

             //Prevent form submission
             e.preventDefault();

             //Get the form instance
            var $form = $(e.target);

             //Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
            
            console.log($form.serialize);
            

             //Use Ajax to submit form data
           // $.post($form.attr('action'), $form.serialize(), function(result) {
           //     console.log(result);
          //  }, 'json');
     //   });
});