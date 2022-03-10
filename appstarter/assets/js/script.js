// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots : 2 ,
        responsive:{
            0:{
                items : 1
            },
            500:{
                items : 2 ,
                margin : 20 
            },
            600:{
                items : 3
            },
            768:{
                items : 2
            },
            1000:{
                items : 4
            },
            1024:{
                items : 3
            }
        } 
    })
})

