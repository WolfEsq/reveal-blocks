console.log( 'here' );

( function( $ ) {
 
 
// $( ".reveal-button" ).click(function() {
//   $(".wp-block").each(function() {
//     $( this ).toggleClass( "block-revealed" );
//   });
// });

$( ".reveal-button" ).click(function() {
    
    console.log( "clicked!" );
    
    $("body").toggleClass( "blocks-revealed" );
});

// $( ".reveal-button" ).click(function() {
    
//   $(".wp-block").each(function() {
      
      
//       console.log($(this));
      
//     // $( this ).toggleClass( "block-revealed" );
    
        
//     $( this ).toggle(function () {
        
//         $( this ).css({border: "2px solid #ccddff"});
            
        
//     }, function () {
//         $( this ).css({border: "none"});
//     });
    
    
    
    
    
//   });
// });

 
// $('.reveal-button').click(function() {
    
//     console.log( "clicked!" );
    
//     // $('.wp-block').css({ "background-color": "#ffe", "border-left": "5px solid #ccc" })
    
//     $('.wp-block').toggle(function() {
//         $('.wp-block').css({ "background-color": "#ffe", "border-left": "5px solid #ccc" })
//     }, function() {
//         $('.wp-block').css({ "background-color": "black", "border-left": "5px solid #ccc" })
//     });
    
// });


    // $('.wp-block').toggle(function () {
        
    //     $(".wp-block").each().css({border: "2px solid #ccddff"});
            
        
    // }, function () {
    //     $(".wp-block").css({border: "initial"});
    // });



//  function revealBlocks(){   
//     jQuery( 'wp-block' ).toggleClass('blocks-revealed');
// }

// function revealTheBlocks(){
    
//     $('.wp-block').toggle(function () {
        
//         $(".wp-block").css({border: "2px solid #ccddff"});
            
        
//     }, function () {
//         $(".wp-block").css({border: "initial"});
//     });
    
// }

// });

}( jQuery ) );