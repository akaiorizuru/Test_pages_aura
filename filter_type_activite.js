$(document).ready(function(){
    //Système filtre
    $(".title_type_activite").click(function(e){
        let filter = "." + e.target.dataset.filter;
        //btn cliqué
        if($(this).hasClass('title_type_activite_notClicked')){
            $(".title_type_activite"+filter).addClass('title_type_activite_clicked').removeClass('title_type_activite_notClicked');
            $('.acteur_box').not(filter).addClass('grisee');
        }else{
            $(".title_type_activite"+filter).addClass('title_type_activite_notClicked').removeClass('title_type_activite_clicked');  
            $('.acteur_box').not(filter).removeClass('grisee');          
        }

    });

    // position "random"
    // let a = 2;
    let counterlength = $('.acteur_box').length;
    let counternb = 0;
    let maxNb = 15 ;
    let minNb = -maxNb;
    $('.acteur_box').css({margin:maxNb+1});
    $('.title_type_activite').css({margin:maxNb+1});


    // Toutes les box
    let boxes = $('.acteur_box');
    console.log(boxes);
    console.log($('acteur_box')[2])

    // for(let i = 0; i < counterlength; i++){
    //     var randomNumberY =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;
    //     var randomNumberX =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;

    //     console.log(randomNumberY);


    //     // if(counternb<=maxNb){ 
    //     //     counternb = counternb+1;
    //     //     if(counternb % 2 ==0){
    //     //         $('.acteur_box')[i].css({top:5+counternb*2+"px"});
    //     //     }else{
    //     //         $('.acteur_box')[i].css({top:5+counternb*2+"px"});
    //     //     }
    //     // }
    //     // else{
    //     //     counternb =0;
    //     // }

    //     boxes[i].css({"top":randomNumberY});
    //     boxes[i].css({"left":randomNumberX});
    // }

    var maxBubbleValue = 0;
    console.log(maxBubbleValue);
    let bubble = $('.bubble');
    console.log(bubble.length);
    
    // $('.phase').each(function(){
    //     val=$('.bubble').length;
    //     console.log(val);
    //     // if (maxBubbleValue <= val) {
    //     //     maxBubbleValue = val;
    //     // }
    //     // console.log(maxBubbleValue);
    // });
    $( ".phase" ).each(function() {
        val=$(this).find('.bubble').length;
        // console.log($(this).find('.bubble'));
        if (maxBubbleValue <= val) {
            maxBubbleValue = val;
        }
        console.log(maxBubbleValue);
    });

    var nbPerSection=undefined;

})