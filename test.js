(function ($) {

	var click = $("#submit");
            
            click.live("click", function() {
            	
                var e = {
                    name : $("#input").val()
                };

                $.ajax({
                    url: "target.php",
                    type : "POST",
                    data: JSON.stringify(e),
                    dataType: 'html',
                    success: function(result) {
                    	//alert(data);
                        $("#container").prepend(result);
                    }
                });
            });

})(jQuery);

