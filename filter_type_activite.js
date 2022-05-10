$(document).ready(function(){
    //var initialisation
    let boxes = document.querySelectorAll('.acteur_box');
    
    //Système filtre
    $(".title_type_activite").click(function(e){

        // let filter = "." + e.target.dataset.filter;
        // const filterSelected = [];
        // //Un bonton est cliqué alors : 
        // // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné)
        // if($(e.target).hasClass('title_type_activite_notClicked')){
        //     $(e.target).addClass('title_type_activite_clicked').removeClass('title_type_activite_notClicked');
        //     $('.acteur_box').not(filter).addClass('grisee');
        // }else{
        //     $(e.target).addClass('title_type_activite_notClicked').removeClass('title_type_activite_clicked'); 
        //     $('.acteur_box').not(filter).removeClass('grisee');
        //     // $('.acteur_box').not(filter).addClass('CEDRIC');

        //     $(".title_type_activite_clicked").each(function(i,element) {
        //         var value_data_filter = element.getAttribute('data-filter');
        //         $('.acteur_box').not('.' + value_data_filter).addClass("grisee");
        //     });
        // } 

        /////////////////////////////////////////////////////////////////////////////////
        
        //test ver js 
            let filter = "." + e.target.dataset.filter;
            const filterSelected = [];
            // // Test pour obtenir l'ensemble des variables contenant la classe du filter
            // let box_contain = document.getElementsByClassName("acteur_box realisation");
            let box_contain = document.querySelectorAll(".acteur_box").classList.contains(e.target.dataset.filter);
                // erreur afficher pour la ligne 33 en diant que boxes.each n'est pas une fonction
                // console.log(box_contain) marche comme prévu en retournant vraissemblablement tous les éléments ayant la class acteur  mais console.log(!box container) ne fonctionne pas et retourne que un booléen
            console.log("test pour voir " + box_contain)
        //Un bonton est cliqué alors : 
        // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné)
        if(e.target.classList.contains('title_type_activite_notClicked')){
            e.target.classList.add('title_type_activite_clicked');
            e.target.classList.remove('title_type_activite_notClicked');
            // if (!document.div.classList.contains('.realisation')){
            //     box_contain.classList.add('grisee');
            //     console.log('test this if true : ' + box_contain)
            // }
            console.log(box_contain);
            // boxes.querySelector(":not(.realisation)").classList.add('grisee');
        }else{
            e.target.classList.add('title_type_activite_notClicked');
            e.target.classList.remove('title_type_activite_clicked');  
            boxes.querySelectorAll(":not(#elem)") 
            // boxes.querySelector(":not(" + filter + ")").classList.remove('grisee');
            // boxes.querySelector(":not(" + filter + ")").classList.add('CEDRIC');

            // document.querySelectorAll(".title_type_activite_clicked").each(function(i,element) {
            //     var value_data_filter = element.getAttribute('data-filter');
            //     boxes.querySelector(":not(." + value_data_filter + (")")).classList.add("grisee");
            // });
        } 

        // // console.log(document.querySelect(":not(." + value_data_filter + (")")))
        

    });

    // let boxes = document.querySelectorAll('.acteur_box');
    
    // //Système filtre
    // document.querySelector(".title_type_activite").click(function(e){

    //     let filter = "." + e.target.dataset.filter;
    //     const filterSelected = [];
    //     //Un bonton est cliqué alors : 
    //     // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné)
    //     if(document.querySelector(e.target).classList.contains('title_type_activite_notClicked')){
    //         document.querySelector(e.target).classList.add('title_type_activite_clicked').removeClass('title_type_activite_notClicked');
    //         document.querySelector('.acteur_box').not(filter).classList.add('grisee');
    //     }else{
    //         document.querySelector(e.target).classList.add('title_type_activite_notClicked').removeClass('title_type_activite_clicked'); 
    //         document.querySelector('.acteur_box').not(filter).removeClass('grisee');
    //         // document.querySelector('.acteur_box').not(filter).classList.add('CEDRIC');

    //         document.querySelector(".title_type_activite_clicked").each(function(i,element) {
    //             var value_data_filter = element.getAttribute('data-filter');
    //             document.querySelector('.acteur_box').not('.' + value_data_filter).classList.add("grisee");
    //         });
    //     } 
    // });



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