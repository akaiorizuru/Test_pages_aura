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

})