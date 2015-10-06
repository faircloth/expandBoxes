// var test = 'correct';
// console.log (test);


$('div').on('click','.headers', function(event) {
    var btn = $(event.target);
    var parent = $(btn.parent());
    var content = $(parent.children('p'));
    content.removeClass('hidden')
    content.addClass('shown');    
});

$('div').on('click','.headers', function(event) {
    var btn = $(event.target);
    var parent = $(btn.parent());
    var sibling = $(parent.siblings());
    var content = $(sibling.children('p'));
    content.removeClass('shown')
    content.addClass('hidden');    
});



