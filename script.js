// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello,My world!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': 'lightblue'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.google.co.jp">Google</a></p>' );
    $( 'footer a' ).css( 'color','yellow' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });



});
