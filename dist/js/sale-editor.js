$(document).ready(function () {
    bkLib.onDomLoaded(nicEditors.allTextAreas);


    let form = $("form#sale-form");
    $('.edit-button').on('click', function(e) {
        $(form).submit(function (e) {
            e.preventDefault();
            var formData = new FormData(this);

            $.ajax({
                url: $(form).attr('action'),
                type: 'POST',
                data: formData,
                success: function (data) {
                    console.log(data)
                },
                error: function (data) {
                    console.log('bad' + data)
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });
    });
    $(".sale-edit-form__delete-image").click(function () {
        let $el = $(this);
        let delValue = $el.attr('id');
        let delID = $('input[name="id"]').val();

        $.ajax({
            type: 'post',
            url: './sale/modules/sale-delete-image-action.php',
            data: 'delete-id=' + encodeURIComponent(delID) + '&delete-value=' + encodeURIComponent(delValue),
            success: function (data) {
                if (data) {
                    console.log(data);
                    $el.parent().fadeOut(800,function(){
                        $el.parent().remove();
                    });
                } else {
                    console.log(data);
                    alert('Файл не удален');
                }
            }
        });
    });
    $('.sale-edit-form__image-collection').sortable({
        axis: 'x',
        update: function (event, ui) {
            let data = $(this).sortable('serialize');
            data += '&id=' + $('input[name="id"]').val();
            //console.log(data);
            // POST to server using $.post or $.ajax
            $.ajax({
                data: data,
                type: 'POST',
                url: './sale/modules/sale-image-order-action.php',
                success: function (data) {
                    console.log(data)
                }
            });
        }
    });
});

