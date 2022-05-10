$(document).ready(function(){
    //var initialisation
    let boxes = document.querySelectorAll('.acteur_box');
        
    $(".title_type_activite").click(function(e){
        //test ver js 
        let filter = "." + e.target.dataset.filter;
        // const filterSelected = [];
        // // // Test pour obtenir l'ensemble des variables contenant la classe du filter
        // // let box_contain = document.getElementsByClassName("acteur_box realisation");
        // let box_contain = document.querySelectorAll(".acteur_box").classList.contains(e.target.dataset.filter);
        //     // erreur afficher pour la ligne 33 en diant que boxes.each n'est pas une fonction
        //     // console.log(box_contain) marche comme prévu en retournant vraissemblablement tous les éléments ayant la class acteur  mais console.log(!box container) ne fonctionne pas et retourne que un booléen
        // console.log("test pour voir " + box_contain)

        


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
    });
});