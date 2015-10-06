// var test = 'correct';
// console.log (test);


$('h1').on('click','p', function(event) {
    var btn = $(event.target);
    btn.removeClass('hidden');
    btn.addClass('shown'); 
});



