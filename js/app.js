$(document).ready(function(){
    $('.fa-cart-plus').on('click', function(){
        $("ul").append("<li> <input type='checkbox' name='done' class='done'> <span>" + $('input').val() + "</span> <input type='radio' name='delete' class='delete'> </li>");

        $('.done').on('click', function(){
            if ($("checkbox").prop("checked", true)) {
                $(this).next().addClass("alreadydone");
            }
            else {
                $(this).next().removeClass("alreadydone");
            }
    });

            $('.delete').on('click', function(){
                $(this).parent().remove();
            });
    });

    $('.done').on('click', function(){
        if ($("checkbox").prop("checked", true)) {
            $(this).next().addClass("alreadydone");
        }
        else {
            $(this).next().removeClass("alreadydone");
        }
    });

    $('.delete').on('click', function(){
        $(this).parent().remove();
    });

});