$('.ask').on('click',function (e) {
    e.preventDefault();

    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)
})


$('button[data-filter]').click(function () { 
    let attr = $(this).attr('data-filter');
    attr === 'all'? $('div[data-filter]').slideDown(500):$('div[data-filter]').slideUp(500);
    
    $(`div[data-filter=${attr}]`).slideDown(500)
 })


function writting(element) { 
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++
        fullText === inner? clearInterval(interval):''
    }, 200);
 }

 writting($(`.text-center p`))

 $('.read-more').on('click', function () { 
     $('.text-hidden').toggleClass('hidden');
     const x = document.querySelector('.read-more');
     x.innerHTML === 'Hidden'? x.innerHTML = 'Read More': x.innerHTML = 'Hidden'
  })

