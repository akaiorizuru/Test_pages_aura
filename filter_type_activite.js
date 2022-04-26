$(document).ready(function(){
    // $grid=$('.section_type_activite').isotope({
	// 	itemSelector:'.acteur_box',
	// 	masonry:{
	// 		columnWidth: '.acteur_box'
	// 	}
	// })

    // // pour gérer le filtrage par catégories

	// $('.title_type_activite').on('click', function(event){
	// 	var filterValue = $(this).attr('data-filter');

	//   	$grid.isotope({ filter: filterValue });
	//   	$('.title_type_activite').removeClass('active');
	//   	$(this).addClass('active');
	//   	event.preventDefault(); //avec le event entre parenthèse, il permet de rester sur la catégorie concerné
	//   	console.log(filterValue);
	// });
    // $grid.isotope({ filter: '.conception:not(.transition)'});

    // $('.title_type_activite').click(function grisee(){
    //     $('.acteur_box, .conception').addClass('grisee');
    // })   

    // function grisee(){
    //     $('.acteur_box, .conception').css({filter: "grayscale(1) blur(1px)"});
    // }

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