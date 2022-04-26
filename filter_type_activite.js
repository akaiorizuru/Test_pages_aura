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
    $('.acteur_box').css({margin:maxNb+1+"px"});
    $('.title_type_activite').css({margin:maxNb+1+"px"});


    for(let i = 0; i < counterlength; i++){
        var randomNumberY =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;
        var randomNumberX =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;

        console.log(randomNumberY);

        // if(counternb<=maxNb){ 
        //     counternb = counternb+1;
        //     if(counternb % 2 ==0){
        //         $('.acteur_box')[i].css({top:5+counternb*2+"px"});
        //     }else{
        //         $('.acteur_box')[i].css({top:5+counternb*2+"px"});
        //     }
        // }
        // else{
        //     counternb =0;
        // }

        $('.acteur_box')[i].css({top:randomNumberY});
        $('.acteur_box')[i].css({left:randomNumberX});


    }

    

})