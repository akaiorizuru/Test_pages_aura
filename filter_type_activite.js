$(document).ready(function(){
    //var initialisation
    let boxes = $('.acteur_box');

    //Système filtre
    $(".title_type_activite").click(function(e){
        let filter = "." + e.target.dataset.filter;
        const filterSelected = [];
        var class_selected = "";
        //Un bonton est cliqué alors : 
        // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné)
        if($(e.target).hasClass('title_type_activite_notClicked')){
            $(e.target).addClass('title_type_activite_clicked').removeClass('title_type_activite_notClicked');
            $('.acteur_box').not(filter).addClass('grisee');
        }else{
            $(e.target).addClass('title_type_activite_notClicked').removeClass('title_type_activite_clicked'); 
            $('.acteur_box').not(filter).removeClass('grisee');
            $('.acteur_box').not(filter).addClass('CEDRIC');

            $(".title_type_activite_clicked").each(function(i,element) {
                var value_data_filter = element.getAttribute('data-filter');
                $('.acteur_box').not('.' + value_data_filter).addClass("grisee");
            });
        }  
    });

    //Récupérer le nombre de "bulles" total maximum d'une section "phase"
    //initialisation de valeur
    var maxBubbleValue = 0;
    console.log(maxBubbleValue);
    let bubble = $('.bubble');
    console.log(bubble.length);
    
    $( ".phase" ).each(function() {
        val=$(this).find('.bubble').length;
        // console.log($(this).find('.bubble'));
        if (maxBubbleValue < val) {
            maxBubbleValue = val;
        }
        console.log(maxBubbleValue);
    });
    

    // Générer un position aléatoire des "acteur_box"
    // Initialisation de valeur
    let maxNb = 85 ;
    let minNb = -maxNb;
    $('.acteur_box').css({"margin":maxNb/2});
    $('.title_type_activite').css({"margin":maxNb/2});
    // console.log(boxes);
    // console.log($('.acteur_box')[2]);
    // console.log(boxes[2])
        
    boxes.each(function(i) {
        // génération de nombre aléatoire avec un minimum et maximum
        var randomNumberY =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;
        var randomNumberX =  Math.floor(Math.random() * (maxNb - minNb + 1)) + minNb;
        // console.log(boxes[i]);
        // change de la position top et left de base
        $(this).css({"top":randomNumberY});
        $(this).css({"left":randomNumberX});
    });

})