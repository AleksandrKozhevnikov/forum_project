$(document).ready(function () {
    $('#mytable').Tabledit({
        url: 'rent/action.php',
        deleteButton: true,
        saveButton: true,
        columns: {
            identifier: [0, "id"],
            editable: [[1, 'number'], [2, 'type'], [3, 'rooms'], [4, 'area'], [5, 'price'], [6, 'summ'], [7, 'comment'], [8, 'floor'], [9, 'bc', '{"Атолл": "Атолл", "Кварц": "Кварц", "Форум": "Форум"}'], [10, 'isChecked', '{"0": "Нет", "1": "Да"}']]
        },
        restoreButton: false,
        onSuccess: function (data, textStatus, jqXHR) {
            if (data.action == 'delete') {
                $('#' + data.id).remove();
            }
            console.log('onSuccess(data, textStatus, jqXHR)');
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        },
        onFail: function(jqXHR, textStatus, errorThrown) {
            console.log('onFail(jqXHR, textStatus, errorThrown)');
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        onAlways: function() {
            console.log('onAlways()');
        },
        onAjax: function(action, serialize) {
            console.log('onAjax(action, serialize)');
            console.log(action);
            console.log(serialize);
        },
        buttons: {
            edit: {
                class: 'btn btn-sm btn-default',
                html: '<span class="glyphicon glyphicon-pencil"></span>',
                action: 'edit'
            },
            save: {
                class: 'btn btn-sm btn-success',
                html: '<span class="glyphicon glyphicon-ok"></span>'
            },
            delete: {
                class: 'btn btn-sm btn-default',
                html: '<span class="glyphicon glyphicon-trash"></span>',
                action: 'delete'
            },
            confirm: {
                class: 'btn btn-sm btn-default',
                html: '<span class="glyphicon glyphicon-ok"></span>'
            }
        }
    });

    function addOfficeImageListener () {
        $(".add-office-image").click(function () {
            let $el = $(this);
            let fd = new FormData();
            let files = $('#file' + this.name)[0].files[0];

            fd.append('file', files);
            fd.append('name', this.name);
            $.ajax({
                url: 'rent/add-office-image.php',
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success:function(data){
                    if(data !== '' && data !== '0'){
                        $el.parent().before('<div class="table-edit__image-block"><span>' + data + '</span><a class="delete-office-image" id="' + data + '"><i class="glyphicon glyphicon-remove"></a><br></div>');
                        addDeleteOfficeImageListener();
                        console.log("success");
                        console.log(data);
                    }
                },
                error: function(data){
                    alert('Файл не загружен');
                    console.log(data);
                }
            });
        });
    }
    addOfficeImageListener();


    function addDeleteOfficeImageListener () {
        $(".delete-office-image").click(function () {
            let $el = $(this);
            let delValue = $el.attr('id');
            let delID = $el.closest('tr').attr('id');
            $.ajax({
                type: 'post',
                url: 'rent/delete-office-image.php',
                data: 'delete-id=' + encodeURIComponent(delID) + '&delete-value=' + encodeURIComponent(delValue),
                success: function (data) {
                    if (data) {
                        console.log(data);
                        $el.parent().fadeOut(800,function(){
                            $el.remove();
                        });
                    } else {
                        alert('Файл не удален');
                    }
                }
            });
        });
    }
    addDeleteOfficeImageListener();


    let refreshSn = function ()
    {
        let time = 600000; // 10 mins
        setTimeout(
            function ()
            {
                $.ajax({
                    url: 'modules/refresh_session.php',
                    cache: false,
                    complete: function () {refreshSn();}
                });
            },
            time
        );
    };
    refreshSn();

    $("#rentEditorFilter").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#mytable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
