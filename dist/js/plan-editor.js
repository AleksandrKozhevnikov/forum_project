"use strict";

$( document ).ready(function() {

    if($('select[name="bc-select"]')){
        $('.plan-editor__bc').hide();
        $('.plan-editor__bc').eq($('select[name="bc-select"]').val()).show();
        $('select[name="bc-select"]').change(function () {
            $('.plan-editor__bc').hide();
            $('.plan-editor__bc').eq($('select[name="bc-select"]').val()).show();
        })
    }
});