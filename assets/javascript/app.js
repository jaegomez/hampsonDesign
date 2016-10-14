/* This is a way for it to be DRYER 


$(document).ready(function(){

	$(".borderBaths").hide();
	$("#myCarouselBaths").hide();
	// hiding kitchen slider content
	$(".borderKitchens").hide();
	$("#myCarouselKitchens").hide();
	// hiding living room slider content
	$(".borderLivingRooms").hide();
	$("#myCarouselLivingRooms").hide();
	// hiding offices / built-ins slider content
	$(".borderOffices").hide();
	$("#myCarouselOffices").hide();

	$(".galleryDescriptions").hide();


	$('.carousel-button').on('click', function(){
		var carouselID = $(this).attr('data-carouselId');
		$('#'+carouselID).show();
		alert(carouselID)
	})
});


*/


$(document).ready(function(){

	var galleries = [{

		galleryName: "Kitchen Gallery"
	}, {
		galleryName: "Bath Gallery"
	}, {
		galleryName: "Living Room Gallery"
	}, {
		galleryName: "Office | Built-In | Outdoor"
	}];

	var galleryCount = 0;


	//originally hiding all carousel for sections from showing
	//hiding bath slider content
	$(".borderBaths").hide();
	$("#myCarouselBaths").hide();
	// hiding kitchen slider content
	$(".borderKitchens").hide();
	$("#myCarouselKitchens").hide();
	// hiding living room slider content
	$(".borderLivingRooms").hide();
	$("#myCarouselLivingRooms").hide();
	// hiding offices / built-ins slider content
	$(".borderOffices").hide();
	$("#myCarouselOffices").hide();

	$(".galleryDescriptions").hide();

	// when kitchens button is clicked on function will run and show the below items
	$("#kitchens").click(function(){
		//checking to see if click was succesful
		console.log('succes')

		$("#myCarouselKitchens").fadeIn(2000);
		$(".borderKitchens").show(2000);

		// this will hide everyone in the Welcome PAGE DIV therefore it will hide myCarousel on the Home page and the textUnder it
		$(".hideMeWelcomePage").hide(1000);

		// hides original welcome page carousel
		// 			$("#myCarousel").hide();

		// hides textUnderCarousel on welcome page
		//			$(".textUnderCarousel").hide();

		// hides border around the welcome page carousel
		// 			$(".border").hide();

		// hides businessBox which is in the About page Where its ABOUT HAMPSON DESIGN
		$(".businessBox").hide();

		// hides all the Feauttete boxes which are the ones that say DESIGN, CONSULTATION, And PRoject Management
		$("#feautretteDeals").hide();

		$("#myCarouselBaths").hide();
		$(".borderBaths").hide();

		$(".borderLivingRooms").hide();
		$("#myCarouselLivingRooms").hide();

		$(".borderOffices").hide();
		$("#myCarouselOffices").hide();
		
		clearGalleryName()
		showGallery();

	});

	function showGallery(){
		$("#galleryName").html(galleries[galleryCount].galleryName);
		console.log("grrr")
		$(".galleryDescriptions").show();
		
	}

	function clearGalleryName(){
		$("#galleryName").html("");
		console.log("chimp")
	}

	// when baths button is clicked on function will run and show the below items
	$('#baths').click(function(){
		// checking to see if function is succesful
		console.log('success again!')

		$("#myCarouselBaths").fadeIn(2000);
		$(".borderBaths").show(2000);

		// this will hide everyone in the Welcome PAGE DIV therefore it will hide myCarousel on the Home page and the textUnder it
		$(".hideMeWelcomePage").hide(1000);

		// hides businessBox which is in the About page Where its ABOUT HAMPSON DESIGN
		$(".businessBox").hide();

		// hides all the Feauttete boxes which are the ones that say DESIGN, CONSULTATION, And PRoject Management
		$("#feautretteDeals").hide();

		$(".borderKitchens").hide();
		$("#myCarouselKitchens").hide();

		$(".borderLivingRooms").hide();
		$("#myCarouselLivingRooms").hide();

		$(".borderOffices").hide();
		$("#myCarouselOffices").hide();	
		
		clearGalleryName();
		showGallery();

	});

	// when livingRoom button is clicked on function will run and show/hide below items
	$('#livingRoom').click(function(){
		// checking to see if function is succesful
		console.log('success again again!')

		$("#myCarouselLivingRooms").fadeIn(2000);
		$(".borderLivingRooms").show(2000);

		// this will hide everyone in the Welcome PAGE DIV therefore it will hide myCarousel on the Home page and the textUnder it
		$(".hideMeWelcomePage").hide(1000);

		// hides businessBox which is in the About page Where its ABOUT HAMPSON DESIGN
		$(".businessBox").hide();

		// hides all the Feauttete boxes which are the ones that say DESIGN, CONSULTATION, And PRoject Management
		$("#feautretteDeals").hide();

		$(".borderKitchens").hide();
		$("#myCarouselKitchens").hide();

		$("#myCarouselBaths").hide();
		$(".borderBaths").hide();

		$(".borderOffices").hide();
		$("#myCarouselOffices").hide();
		
		clearGalleryName();
		showGallery();

	});

	$('#offices').click(function(){
		// checking to see if function is succesful
		console.log('success again again again!')

		$("#myCarouselOffices").fadeIn(2000);
		$(".borderOffices").show(2000);

		// this will hide everyone in the Welcome PAGE DIV therefore it will hide myCarousel on the Home page and the textUnder it
		$(".hideMeWelcomePage").hide(1000);

		// hides businessBox which is in the About page Where its ABOUT HAMPSON DESIGN
		$(".businessBox").hide();

		// hides all the Feauttete boxes which are the ones that say DESIGN, CONSULTATION, And PRoject Management
		$("#feautretteDeals").hide();

		$(".borderKitchens").hide();
		$("#myCarouselKitchens").hide();

		$("#myCarouselBaths").hide();
		$(".borderBaths").hide();

		$(".borderLivingRooms").hide();
		$("#myCarouselLivingRooms").hide();
		
		clearGalleryName();
		showGallery();

	});


	//
	//$(".kitchenDrop").click(function(){
	//	$(".kitchenDrop").html("<li><")
	//})


});