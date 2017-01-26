
		$( function( ) {
			var content_div = $( '.right' );
			var content_offset = content_div.offset( ).top;

			var highlight_div = $( '.boxtwo');
			var highlight_subs = highlight_div.find( '> div' );


			var image_div = $( '.boxthree' );
			var ref_div = $( '.chapterref' );

			var content_subs = content_div.find( '> div' );
			content_div.on( 'scroll', function( ) {
				var content_hgt = content_div.height( )
								+ content_offset;

				var current_index;
				content_subs.each( function( index ) {
					var curr_sub = $( this );
					var offset_y = curr_sub.offset( ).top;

					if ( offset_y < content_hgt ) 
						max_y = current_index = index;
				} );


				var curr_highlight = highlight_subs.eq( current_index );

				highlight_subs.hide( );
				curr_highlight.show( );
				//curr_highlight.next( ).show( );
			} ).trigger( 'scroll' );

			function showHighlight( ) {
				hideHighlights( );
				
				image_div.removeClass( 'empty' )
						 .find( '.' + $( this ).attr( 'class' ) ).show( );
						 
				ref_div.removeClass( 'emptyy' )
				.find( '.' + $( this ).attr( 'class' ) ).show( );

			}
			function hideHighlights( ) {
				image_div.addClass( 'empty' )
						 .find( 'img' ).hide( );

						 
				ref_div.addClass( 'emptyy' )
					.find( 'p' ).hide( );
			}
			hideHighlights( );
			
			console.log( content_div.find( 'i' ) );
			
			content_div.find( 'i' ).hover( showHighlight, hideHighlights );
		} );
	 