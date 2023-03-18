$(document).ready(() => {
    $(function () {

        var $charItems = $('#charItems');
        var $name = $('#name');
        var $email = $('#email');
        var $phone = $('#phone');
        var $bday = $('#bday');

        $.ajax({
            type: 'GET',
            url: 'https://chess-tournament-api.devtest.ge/api/grandmasters',

            success: function (charItems) {
                $charItems.append('<span> (total: ' + charItems.length + ')</span>');
                $.each(charItems, function (i, char) {
                    $charItems.append('<li><span>' + char.name + '</span><img src="' + char.image + '" /></li>');

                });
            }
        })

        $('#personal').on('click', function(){
            var player = {
                name: $name.val(),
                email: $email.var(),
                phone: $phone.var(),
                date_of_birth: $bday.var()
            }

            $.ajax({
                type: 'POST',
                url: 'https://chess-tournament-api.devtest.ge/api/grandmasters',
                data: player,
                success: 'success',
                datatype: 'JSON'
            })
        })
    })
   
})