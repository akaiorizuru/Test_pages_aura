$(document).ready(function(){

    // le '#voletContainer' doit de base posséder aussi la classe 'close' (à rajouter)
    
    // ici, la classe '.otherConatiner' regroupe tout les éléments autres que le volet
    // but : rendre les éléments en rrière moins visible et non-clickabel
    let background_element= $('#otherContainer')

    // lors du click sur un acteur:
    $(".acteur_box").click(function(e){
    // si le volet possède la classe 'close' alors:
    if ( $('#voletContainer' ).hasClass('close' ) ) {
        // ajouter un effet blur au fond + rendre inclickable a zone en arrière :
        background_element.addClass('blur_background' );
        // css de cette classe : 
            //  .blur_background{
                //     /* classe premettant de grisé et de flouter les éléments qui ne correspondent pas */
                //     filter: grayscale(1) blur(4px);
                //     pointer-events: none;
            // }
            $('#voletContainer').addClass('open');
            // classe '.open' permet de rendre visible le contenu du volet 
            // par exemple : 
                    // #voletContainer.open{
                    //     display: block;
                    // }
            $('#voletContainer').removeClass('close');
            // la classe '.close' quand à elle cache le volet quand elle n'est pas ouverte 
            // par exemple :
                // #voletContainer.close{
                //     display:none;
                // }

        }
    })
    
    // inversement lorsque l'on clique sur le bouton de fermeture
    $('.mt-1').click(function(){
        if ( $('#voletContainer' ).hasClass('open' ) ) {
            background_element.removeClass('blur_background' );
            $('#voletContainer' ).addClass('close').removeClass('open');
        }
    })
    
})