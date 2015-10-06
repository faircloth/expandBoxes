// var test = 'correct';
// console.log (test);


$('div').on('click','.headers', function(event) {
    btn = $(event.target);
    parent = $(btn.parent());
    content = $(parent.children('p'));
    content.removeClass('content')
    content.addClass('hidden');
});



