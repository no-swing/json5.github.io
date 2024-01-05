

    function startGen(op) {
        try {
            $("#outValueDiv").empty();

            var sqlText = $('#originalText').val();

            if(op==2)
                sqlText=sqlText.replace(/\_(\w)/g, function (all, letter) { return letter.toUpperCase(); });
            if(op==1)
                sqlText=sqlText.replace(/([A-Z])/g, "_$1").toLowerCase();

            tableName="Unxxx"
            ;

            var clasResult = '<div class="" style="margin-top: 10px;">' +
                '<div style="display: block;\n' +
                '    font-size: 13px;\n' +
                '    line-height: 1.42857143;\n' +
                '    color: #333;\n' +
                '    word-break: break-all;\n' +
                '    word-wrap: break-word;\n' +
                '    background-color: #f5f5f5;\n' +
                '    border: 1px solid #ccc;\n' +
                '    border-radius: 4px;"><div style="background: #ddd;padding: 3px 9px;">结果：</div>' +
                '<pre style="padding: 9px;"><a style="float:right;" href="javascript:copyToClipboard(\'div-'+tableName+'\')">复制</a><div id="div-'+tableName+'">'+sqlText+'</div></pre>' +
                '</div>' +
                '</div>';

            $("#outValueDiv").append(clasResult);

            $("#checkResult").removeClass("alert-danger");
            $("#checkResult").addClass("alert-success");
            $("#checkResult").text("操作成功！").show();
        } catch (e) {
            $("#checkResult").removeClass("alert-success");
            $("#checkResult").addClass("alert-danger");
            $('#checkResult').text("输入的JSON数据格式不正确："+e.message).show();
        }
    }



    /*
     *
    bootoast({
        message: 'Helo!',
        type: 'info',
        position: 'bottom-center',
        icon: undefined,
        timeout: false,
        animationDuration: 300,
        dismissable: true
    });
    message	'Helo!'	Toast消息，可以是任何html字符串。
    type	'info'	bootstrap情景类的class名称。
    icon	根据选择的情景类来决定。	Bootstrap 3 glyphicons名称。
    position	'bottom-center'	Toast消息显示的位置。可以是top，left-top，right-top，bottom，left-bottom，right-bottom。
    timeout	false	Toast自动隐藏的时间。设置为false或0表示不会自动隐藏。
    dismissable	true	是否在Toast上显示×按钮。
    animationDuration	300	Toast隐藏动画的持续时间，单位毫秒。
     *
     * */
    function showResult(e) {
        if(!e){
            $("#checkResult").removeClass("alert-danger");
            $("#checkResult").addClass("alert-success");
            $("#checkResult").text("操作成功！").show();
        }else{
            $("#checkResult").removeClass("alert-success");
            $("#checkResult").addClass("alert-danger");
            $('#checkResult').text("error："+e.message).show();
        }
    }


    function copy(id) {
        try {
            $("#"+id).select();
            document.execCommand("Copy")
            $("#checkResult").removeClass("alert-danger");
            $("#checkResult").addClass("alert-success");
            $("#checkResult").text("复制成功！");
        } catch (e) {
            $("#checkResult").removeClass("alert-success");
            $("#checkResult").addClass("alert-danger");
            $('#checkResult').text('复制失败'+e.message);
        }
    }
    function selectText(element) {
        var text = document.getElementById(element);
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
            /*if(selection.setBaseAndExtent){
                selection.setBaseAndExtent(text, 0, text, 1);
            }*/
        } else {
            alert("none");
        }
    }

    function copyToClipboard(divLog) {
        try {
            selectText(divLog);
            document.execCommand("Copy")
            //document.execCommand('Copy', false, null);
            $("#checkResult").removeClass("alert-danger");
            $("#checkResult").addClass("alert-success");
            $("#checkResult").text("复制成功！");
        } catch (e) {
            showResult(e);
            alert('error: '+e.message);
        }
    }
