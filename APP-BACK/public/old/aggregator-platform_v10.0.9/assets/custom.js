$(function() {
    // alert( $('#mehhfooz').html() );

    $('.mehhfooz').dropdown({
        values: [{
            name: 'Male',
            value: 'male'
        }, {
            name     : 'Female',
            value    : 'female',
            selected : true
        }]
    });
})