
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/\{(\d+)\}/g,
            function (m, i) {
                return args[i];
            });
    }

    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }

    //下划线转驼峰
    function toHumpFunc(value) {
        return value.replace(/\_(\w)/g, function(all, letter){
            return letter.toUpperCase();
        });
    }

    //驼峰转下划线
    function toUnderLineFunc(value) {
        return value.replace(/([A-Z])/g,"_$1").toLowerCase();
    }

    //首字母大写
    function firstUpper(name){
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    function getNowFormatDate() {
        var now = new Date();
        var year = now.getFullYear();        //年
        var month = now.getMonth() + 1;   //月
        var day = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();         //分
        var ss = now.getSeconds();           //秒
        var clock = year + "-";
        if(month < 10)
            clock += "0";
        clock += month + "-";
        if(day < 10)
            clock += "0";
        clock += day + " ";
        if(hh < 10)
            clock += "0";
        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm + ":";
        if (ss < 10) clock += '0';
        clock += ss;
        return(clock);
    }

    function startGen() {
        try {
            $("#outValueDiv").empty();

            var sqlText = $('#originalText').val();


            var data=JSON.parse(sqlText);

            var result="";

            result+="CREATE TABLE generic (\n" ;
            var fflag=1;
            $.each(data,function (i,n) {
                if(typeof(n)=='string' )
                {
                    result+="  `"+i+"` TEXT, \n"
                }
                if(typeof(n)=='number' )
                {
                    if((n+"").indexOf(".")>-1)
                        result+="  `"+i+"` FLOAT, \n";
                    else
                        result+="  `"+i+"` INT, \n"
                }
                if(typeof(n)=='boolean' )
                {
                    result+="  `"+i+"` BOOLEAN, \n"
                }
                if(i=="id")
                    fflag=0;
            });

            if(fflag)
                result+="  `id` int(11) NOT NULL AUTO_INCREMENT,\n" ;

            result+="  PRIMARY KEY (id)\n" +
                ");";







            var tableName = "table";

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
                '<pre style="padding: 9px;"><a style="float:right;" href="javascript:copyToClipboard(\'div-'+tableName+'\')">复制</a><div id="div-'+tableName+'">'+convert(result)+'</div></pre>' +
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

    function convert(result){
        return result;
    }

    function format() {
        try {
            $('#originalText').val(sqlFormatter.format($('#originalText').val(), {language: 'sql'}));
            showResult();
        } catch (e) {
            showResult(e);
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


