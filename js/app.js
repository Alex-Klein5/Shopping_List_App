$(document).ready(function(){
	$('.fa fa-cart-plus').on('click', function(){
		$("ul").append("<input type='checkbox' name='done' class='done'> <span> " + $('input') + "</span> <input type='radio' name='delete' class='delete'>");
	});

	$('.done').on('click', function(){
		$(this).next().addClass('.alreadydone');
	});

	$('delete').on('click', function(){
		$(this).parent().remove();
	});
};