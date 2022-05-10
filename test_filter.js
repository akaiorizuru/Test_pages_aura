$(document).ready(function(){
    //initialisation de variable 
    let boxes = document.querySelectorAll('.acteur_box');
        
    $(".title_type_activite").click(function(e){

        //obtenir les filtres (data-filter) associés
        let filter = "." + e.target.dataset.filter;

        //Un bonton est cliqué alors : 
        // si bouton possède la classe type_activite_notClicked (classe affecté aux éléments qui n'ont pas été cliqué ou qui ont été desélectionné) alors
        if(e.target.classList.contains('title_type_activite_notClicked')){
            // ajouter la classe cliqué 
            e.target.classList.add('title_type_activite_clicked');
            // enlever la classe non cliquer
            e.target.classList.remove('title_type_activite_notClicked');
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
            e.target.classList.add('title_type_activite_notClicked');
            e.target.classList.remove('title_type_activite_clicked');  

            //la classe grisee a été enlever pour tous les boites qui ne contiennent pas le filtre qui vient d'être cliquer 
            boxes.forEach(function(element){
                if(element.classList.contains(e.target.dataset.filter)){
                    console.log("boule -1 ")
                }else{
                    element.classList.remove("grisee")
                }
            })

            //fonction pour remettre la classe grisee qui a été enlevé alors que d'autre filtres sont toujours présent
            document.querySelectorAll(".title_type_activite_clicked").forEach(function(element) {
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