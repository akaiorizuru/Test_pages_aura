$(document).ready(function(){
    //initialisation de variable 
    let boxes = document.querySelectorAll('.acteur_box');
    let obj_filter = document.querySelectorAll('.objet_filtre') ;
        
    $(".objet_filtre").click(function(e){

        //obtenir les filtres (data-filter) associés
        let filter = "." + e.target.dataset.filter;

        //Un bonton est cliqué alors : 
        // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné) alors
        if(e.target.classList.contains('objet_filtre_notClicked')){
            obj_filter.forEach(function(obj){
                    if(obj.classList.contains(e.target.dataset.filter)){ 
                        obj.classList.add('objet_filtre_clicked'); 
                        obj.classList.remove('objet_filtre_notClicked');
                    }
                });
            console.log("filter,, :  " + e.target.dataset.filter)

            // // ajouter la classe cliqué 
            // e.target.classList.add('objet_filtre_clicked');
            // // enlever la classe non cliquer
            // e.target.classList.remove('objet_filtre_notClicked');

            //pour chaque ".acteur_box", vérifier 
            boxes.forEach(function(element){
                // si la boite contient la class du filtre 
                if(element.classList.contains(e.target.dataset.filter)){
                    console.log("boule +1 ")
                }else{
                    // sinon ajouter la classe ".grisee"
                    element.classList.add("grisee")
                }
            })
        }else{
            // réciproquement si le type d'activité n'a pas été cliqué 
            obj_filter.forEach(function(obj){
                if(obj.classList.contains(e.target.dataset.filter)){
                    obj.classList.add('objet_filtre_notClicked');
                    obj.classList.remove('objet_filtre_clicked');  
                } 
            })

            //la classe grisee a été enlever pour tous les boites qui ne contiennent pas le filtre qui vient d'être cliquer 
            boxes.forEach(function(element){
                if(element.classList.contains(e.target.dataset.filter)){
                    console.log("boule -1 ")
                }else{
                    element.classList.remove("grisee")
                }
            })

            //fonction pour remettre la classe grisee qui a été enlevé alors que d'autre filtres sont toujours présent
            document.querySelectorAll(".objet_filtre_clicked").forEach(function(element) {
                var value_data_filter = element.getAttribute('data-filter');
                boxes.forEach(function(val){
                    if(val.classList.contains(value_data_filter)){
                        console.log("boule réajouté");
                    }else(
                        val.classList.add('grisee')
                    )
                });
            });
        } 
    });
});