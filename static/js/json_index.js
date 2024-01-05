
    if (window.localStorage.getItem('show-version-tip') && window.localStorage.getItem('show-version-tip') === '1') {
    } else {
        // $('.old-version').addClass('old-version-tip');
        // $('.old-version').attr('data-href', $('.old-version').attr('href'));
        // $('.old-version').attr('href', '');
        // $('.tip-mask').show()
    }
    $('.tip-mask').click(function () {
        $(this).remove();
        $('.old-version-tip').removeClass('old-version-tip');
        $('.old-version').attr('href', $('.old-version').attr('data-href'));
    });
    $('.old-version-tip').click(function () {
        $(this).remove();
        $('.old-version').attr('href', $('.old-version').attr('data-href'));
        $('.tip-mask').removeClass('old-version-tip');
        window.localStorage.setItem('show-version-tip', '1')
    });

    $('textarea').numberedtextarea();
    var current_json = '';
    var current_content = '';
    var current_json_str = '';
    var xml_flag = false;
    var zip_flag = false;
    var shown_flag = false;
    var compress_flag = false;
    $('.tip').tooltip();

    function init() {
        xml_flag = false;
        zip_flag = false;
        shown_flag = false;
        compress_flag = false;
        isXml = false;
        renderLine();
        $('.xml').attr('style', 'color:#999;');
        $('.zip').attr('style', 'color:#999;');

    }

    $('#cancelZY').click(function () {
        init();
        var content = $.trim($('#json-src').val());
        var result = '';
        if (content != '') {
            //如果是xml,那么转换为json
            if (content.substr(0, 1) === '<' && content.substr(-1, 1) === '>') {
                try {
                    var json_obj = $.xml2json(content);
                    content = JSON.stringify(json_obj);
                } catch (e) {
                    result = '解析错误：<span style="color: #f1592a;font-weight:bold;">' + e.message + '</span>';
                    current_json_str = result;
                    $('#json-target').html(result);
                    return false;
                }

            }
            try {
                var hasZY = $('#cancelZY').prop('checked');
                if (hasZY) {
                    content = content.replace(/\\/g, '\\\\');
                    content = content.replace(/\\"/g, '\\\\"');
                }

                current_json = jsonlint.parse(content);
                current_json_str = JSON.stringify(current_json);
                //current_json = JSON.parse(content);
                current_content = content;
                result = new JSONFormat(content, 4).toString();
            } catch (e) {
                result = '<span style="color: #f1592a;font-weight:bold;">' + e + '</span>';
                current_json_str = result;
            }

            $('#json-target').html(result);
        } else {
            $('#json-target').html('');
        }
    });

    var isXml = false;
    $('#json-src').keyup(function () {
        init();
        var content = $.trim($(this).val());
        var result = '';
        if (content != '') {
            //如果是xml,那么转换为json
            if (content.substr(0, 1) === '<' && content.substr(-1, 1) === '>') {
                isXml = true;
                try {
                    var json_obj = $.xml2json(content);
                    content = JSON.stringify(json_obj);
                } catch (e) {
                    result = '解析错误：<span style="color: #f1592a;font-weight:bold;">' + e.message + '</span>';
                    current_json_str = result;
                    $('#json-target').html(result);
                    return false;
                }

            }

            try {
                var hasZY = $('#cancelZY').prop('checked');
                if (hasZY) {
                    content = content.replace(/\\/g, '\\\\');
                    content = content.replace(/\\"/g, '\\\\"');
                }

                current_json = jsonlint.parse(content);
                current_json_str = JSON.stringify(current_json);

                //current_json = JSON.parse(content);
                current_content = content;
                result = new JSONFormat(content, 4).toString();
            } catch (e) {
                result = '<span style="color: #f1592a;font-weight:bold;">' + e + '</span>';
                current_json_str = result;
            }

            $('#json-target').html(result);
        } else {
            $('#json-target').html('');
        }

    });

    //主入口
    function getRealJsonData(baseStr) {
        if (!baseStr || typeof baseStr != 'string') return;
        var jsonData = null;
        try {
            jsonData = JSON.parse(baseStr);
        } catch (err){
            return null;
        }
        var needReplaceStrs = [];
        loopFindArrOrObj(jsonData,needReplaceStrs);
        needReplaceStrs.forEach(function (replaceInfo) {
            var matchArr = baseStr.match(eval('/"'+ replaceInfo.key + '":[0-9]{15,}/'));
            if (matchArr) {
                var str = matchArr[0];
                var replaceStr = str.replace('"' + replaceInfo.key + '":','"' + replaceInfo.key + '":"');
                replaceStr += '"';
                baseStr = baseStr.replace(str,replaceStr);
            }
        });
        var returnJson = null;
        returnJson = JSON.parse(baseStr);
        return returnJson;
    }
    //遍历对象类型的
    function getNeedRpStrByObj(obj,needReplaceStrs) {
        for (var key in obj) {
            var value = obj[key];
            if (typeof value == 'number' && value > 9007199254740992){
                needReplaceStrs.push({key:key});
            }
            loopFindArrOrObj(value,needReplaceStrs);
        }
    }
    //遍历数组类型的
    function getNeedRpStrByArr(arr,needReplaceStrs) {
        for(var i=0; i<arr.length; i++){
            var value = arr[i];
            loopFindArrOrObj(value,needReplaceStrs);
        }
    }
    //递归遍历
    function loopFindArrOrObj(value,needRpStrArr) {
        var valueTypeof = Object.prototype.toString.call(value);
        if (valueTypeof == '[object Object]') {
            needRpStrArr.concat(getNeedRpStrByObj(value,needRpStrArr));
        }
        if (valueTypeof == '[object Array]') {
            needRpStrArr.concat(getNeedRpStrByArr(value,needRpStrArr));
        }
    }


    $('#right-box').keyup(function () {

        var text = $('#json-target').html().replace(/<br\/>/g, "\n").replace(/<br>/g, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/ig, " ").replace(/Object{...}/ig, "").replace(/Array\[[0-9]+\]/ig, "");
        if (!xml_flag) {
            $('#json-src').val(text);
            current_content = text;
        }

    });
    $('.xml').click(function () {
        if (xml_flag) {
            $('#json-src').keyup();
        } else {
            var result = $.json2xml(current_content);
            $('#json-target').html('<textarea style="width:100%;position:absolute;height: 80vh;min-height:480px;border:0;resize:none;">' + result + '</textarea>');
            xml_flag = true;
            $(this).attr('style', 'color:#15b374;');
        }

    });
    $('.shown').click(function () {
        if (!shown_flag) {
            renderLine();
            $('#line-num').show();
            console.log($('#line-num'))
            $('.numberedtextarea-line-numbers').show();
            shown_flag = true;
            $(this).attr('style', 'color:#15b374;');
        } else {
            $('#line-num').hide();
            $('.numberedtextarea-line-numbers').hide();
            shown_flag = false;
            $(this).attr('style', 'color:#999;');
        }
    });

    function renderLine() {
        var line_num = $('#json-target').height() / 20;
        $('#line-num').html("");
        var line_num_html = "";
        for (var i = 1; i < line_num + 1; i++) {
            line_num_html += "<div>" + i + "<div>";
        }
        $('#line-num').html(line_num_html);
    }

    $('.zip').click(function () {
        if (zip_flag) {
            $('#json-src').keyup();
        } else {
            //$('#json-target').html(current_json_str.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
            $('#json-target').html("<xmp>" + current_json_str + "</xmp>");
            zip_flag = true;
            $(this).attr('style', 'color:#15b374;');
        }

    });
    $('.compress').click(function () {
        if (!compress_flag) {
            $(this).attr('style', 'color:#15b374;');
            //$(this).attr('title','取消折叠').tooltip('fixTitle').tooltip('show');
            $($(".fa-minus-square-o").toArray().reverse()).click();
            compress_flag = true;
        } else {
            while ($(".fa-plus-square-o").length > 0) {
                $(".fa-plus-square-o").click();
            }
            compress_flag = false;
            $(this).attr('style', 'color:#555;');
            $(this).attr('title', '折叠').tooltip('fixTitle').tooltip('show');
        }
    });
    $('.clear').click(function () {
        $('#json-src').val('');
        $('#json-target').html('');
    });
    $('.share').click(function () {
        $('#hidden-message-box').hide();
        $.post("/index.php?is_ajax=1&s=api&app=blog&c=tran&m=add_share",{
            'type':'jsononline',
            'content':$('#json-src').val(),
        }, function (data) {
            if (data.code==-1) {
                $('#lggt').click();
                layer.msg('请先登录再分享');
            }
            else if (data.code==0) {
                layer.msg(data.msg);
            }
            else if(data.code==1)
            {
                $('#copy_share').html(data.data.sign);

                //询问框

                layer.confirm('<div>'+data.msg+'</div><br/><p style="color: red;">数据将定期清除！</p><br /><div id="copy_share">'+data.data.sign+'</div>'+'<br /><a href="#" class="tip copy_share" title="复制分享" data-clipboard-target="#copy_share" data-placement="bottom"><i\n' +
                    '                    class="fa fa-copy"></i> 点击复制链接</a>', {
                    btn: ['关闭'],
                    title:'复制成功',
                    success: function(layero, index){
                        var clipboard_share = new Clipboard('.copy_share');
                    },
                });
            }
            else
            {
                layer.msg('无法分享，未知错误');
            }
        }, 'jsonp');
        /*
        try {
            var jqxhr = $.post("/shares/", {"content": current_json_str}, function (data) {
                var k = data;
            })
                .success(function (data) {
                    // window.location.href = "share.html?k=" + data;
                })
                .error(function (data) {
                    $('#hidden-message-box').hide();
                    if (data.status <= 400 && data.status > 200) {
                        $('#hidden-message').html(data.responseText);
                    } else if (data.status > 400) {
                        $('#hidden-message').html("服务器升级中...此功能暂不可用.");
                    }
                    $('#hidden-message-box').show();
                }).done(function (data) {
                    $('#hidden-message-box').hide();
                    if (data.responseText != undefined) {
                        $('#hidden-message').html(data.responseText);
                    } else {
                        $('#hidden-message').html("服务器升级中...此功能暂不可用.");
                    }
                    $('#hidden-message-box').show();
                }).complete(function (data) {
                    $('#hidden-message-box').show();
                });
        } catch (e) {
            $('#hidden-message-box').show();
        } finally {
            setTimeout(function () {
                $('#hidden-message-box').hide();
            }, 3000);
        }
        */
    });

    //读取share
    console.log(getPar('share'));
    if(getPar('share'))
    {
        // 如果index.php没有配置不缓存，使用get请求会被缓存，百度云暂时不缓存post请求
        $.post("/index.php?is_ajax=1&s=api&app=blog&c=tran&m=read_share&sign="+getPar('share'),function (data) {
            if(data.code==1)
            {
                $("#json-src").val(data.data.content);
                $('#cancelZY').click();
            }

        }, 'jsonp')
    }
    function getPar(par){
        //获取当前URL
        var local_url = document.location.hash.replace('#','');
        //获取要取得的get参数位置
        var get = local_url.indexOf(par +"=");
        if(get == -1){
            return false;
        }
        //截取字符串
        var get_par = local_url.slice(par.length + get + 1);
        //判断截取后的字符串是否还有其他get参数
        var nextPar = get_par.indexOf("&");
        if(nextPar != -1){
            get_par = get_par.slice(0, nextPar);
        }
        return get_par;
    }






    $('.fullScreen').click(function () {
        $('#dragEle').css('left', '');
        $('main .col-md-7').css('width', '');
        $('main .col-md-5').css('width', '');
        $('.editor-con').toggleClass('editor-full-screen');
        $('body').toggleClass('overflow-hidden');
        $('.fullScreen .fa').toggleClass('fa-minus fa-arrows-alt');
        if ($(this).attr('data-original-title') === '全屏') {
            $(this).attr('data-original-title', '最小化')
        } else {
            $(this).attr('data-original-title', '全屏')
        }
    });
    (function ($) {
        $.fn.innerText = function (msg) {
            if (msg) {
                if (document.body.innerText) {
                    for (var i in this) {
                        this[i].innerText = msg;
                    }
                } else {
                    for (var i in this) {
                        this[i].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
                    }
                }
                return this;
            } else {
                if (document.body.innerText) {
                    return this[0].innerText;
                } else {
                    return this[0].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
                }
            }
        };
    })(jQuery);
    $('.save').click(function () {
        // var content = JSON.stringify(current_json);
        // $('#txt-content').val(content);
        //var text = "hell world";
        var html = $('#json-target').html().replace(/\n/g, '<br/>').replace(/\n/g, '<br>');
        var text = $('#json-target').innerText().replace('　　', '    ');
        var blob = new Blob([text], {type: "application/json;charset=utf-8"});
        var timestamp = new Date().getTime();
        saveAs(blob, "format." + timestamp + ".json");
    });
    // $('.copy').click(function () {
    //     $.msg("成功复制到粘贴板","color:#00D69C;");
    //     $(this).tooltip('toggle')
    //           .attr('data-original-title', "复制成功！")
    //           .tooltip('fixTitle')
    //           .tooltip('toggle');
    // });
    var clipboard = new Clipboard('.copy');

    $('#json-src').keyup();

    //拖拽
    // var totalWidth = $(window).outerWidth() >= 1200 ? 1200 : $(window).outerWidth();
    var totalWidth = $(window).outerWidth();
    // var gapWidth = $(window).outerWidth() > 1200 ? ($(window).outerWidth() - 1200) / 2 : 0;
    var gapWidth = 0;
    var forbidenWidth = totalWidth - 400;
    $('#dragEle').myDrag({
        parent: 'parent', //定义拖动不能超出的外框,拖动范围
        randomPosition: false, //初始化随机位置
        direction: 'x', //方向
        handler: false, //把手
        dragStart: function (x, y) {
            totalWidth = $(window).outerWidth();
            gapWidth = 0;
            forbidenWidth = totalWidth - 400;
        }, //拖动开始 x,y为当前坐标
        dragEnd: function (x, y) {
            totalWidth = $(window).outerWidth();
            gapWidth = 0;
            forbidenWidth = totalWidth - 400;

            if (x > forbidenWidth) {
                $('#dragEle').offset({top: 0, left: forbidenWidth - 5 + gapWidth});
                $('main .col-md-5').width(forbidenWidth);
                $('main .col-md-7').width(totalWidth - forbidenWidth);
            } else if (x < 200) {
                $('#dragEle').offset({top: 0, left: 195 + gapWidth});
                $('main .col-md-5').width(200);
                $('main .col-md-7').width(totalWidth - 200);
            } else {
                $('main .col-md-5').width(x);
                $('main .col-md-7').width(totalWidth - x - 1);
            }
        }, //拖动停止 x,y为当前坐标
        dragMove: function (x, y) {
            if (x > forbidenWidth || x < 200) {

            } else {
                $('main .col-md-5').width(x);
                $('main .col-md-7').width(totalWidth - x - 1);
            }
        } //拖动进行中 x,y为当前坐标
    });
    $(window).resize(function () {
        $('#dragEle').css('left', '');
        $('main .col-md-7').css('width', '');
        $('main .col-md-5').css('width', '');
    });

    //搜索
    $('select.chosen-select').on('change', function () {

        window.location.href = $(this).val()
    });
    // if ($(window).scrollTop() > 100) {
    //     $('#goTop').show();
    // } else {
    //     $('#goTop').hide();
    // }
    //
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 100) {
    //         $('#goTop').fadeIn(200);
    //     } else {
    //         $('#goTop').fadeOut(200);
    //     }
    // });
    $('body').on('click', '#goTop', function () {
        $('body,html').animate({
                scrollTop: 0
            },
            500);
        return false;
    });

    /*收藏*/
    $('body').on('click', '.xf-collection', function () {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!')
    });

    $('body').on('mouseenter','.ind-footer-nav-item',function () {
        $('.ind-footer-nav-item').removeClass('active')
        $(this).addClass('active');
        var index = $(this).attr('data-index');
        $('.ind-footer-nav-show').each(function (i, v) {
            if ($(this).attr('data-index') == index){
                $(this).addClass('active')
            }else {
                $(this).removeClass('active');
            }
        });
    });


    $('body').on('mouseenter','.nav-show-one',function () {
        $('.nav-show-one').removeClass('active');
        $(this).addClass('active');
        var itext = $(this).text();
        var ione = $(this).attr('data-chose');
        $(this).closest('.ind-footer-nav-show').find('.nav-show-one-sm-s-show').each(function (i, v) {
            $(v).hide();
            var index =  $(v).attr('data-target');
            if (ione == index){
                $(v).find('.nav-show-one-sm-show-t').text(itext)
                $(v).show();
            }
        });
    });
