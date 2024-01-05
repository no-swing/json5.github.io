$("textarea").numberedtextarea();
var current_json = "";
var current_json_str = "";
var xml_flag = false;
var zip_flag = false;
var shown_flag = false;
var compress_flag = false;
var isXml = false;
$(".tip").tooltip();

function init() {
  xml_flag = false;
  zip_flag = false;
  shown_flag = false;
  compress_flag = false;
  isXml = false;
  renderLine();
  $(".xml").attr("style", "color:#999;");
  $(".zip").attr("style", "color:#999;");
}

$("#cancelZY").click(function () {
  init();
  var content = $.trim($("#json-src").val());
  var result = "";
  if (content != "") {
    //如果是xml,那么转换为json
    if (content.substr(0, 1) === "<" && content.substr(-1, 1) === ">") {
      isXml = true;
      try {
        var json_obj = $.xml2json(content);
        content = JSON.stringify(json_obj);
      } catch (e) {
        result =
          '解析错误：<span style="color: #f1592a;font-weight:bold;">' +
          e.message +
          "</span>";
        current_json_str = result;
        $("#json-target").html(result);
        return false;
      }
    }
    try {
      var hasZY = $("#cancelZY").prop("checked");
      if (hasZY) {
        content = content.replace(/\\/g, "\\\\");
        content = content.replace(/\\"/g, '\\\\"');
      }

      current_json = jsonlint.parse(content);
      current_json_str = JSON.parse(content);
      result = JSON.stringify(current_json_str, null, 4);
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }

    $("#json-target").html(result);
  } else {
    $("#json-target").html("");
  }
});

$("#json-src").keyup(function () {
  init();
  var content = $.trim($(this).val());
  var result = "";
  if (content != "") {
    //如果是xml,那么转换为json
    if (content.substr(0, 1) === "<" && content.substr(-1, 1) === ">") {
      try {
        var json_obj = $.xml2json(content);
        content = JSON.stringify(json_obj);
      } catch (e) {
        result =
          '解析错误：<span style="color: #f1592a;font-weight:bold;">' +
          e.message +
          "</span>";
        current_json_str = result;
        $("#json-target").html(result);
        return false;
      }
    }
    try {
      var hasZY = $("#cancelZY").prop("checked");
      if (hasZY) {
        content = content.replace(/\\/g, "\\\\");
        content = content.replace(/\\"/g, '\\\\"');
      }
      current_json = jsonlint.parse(content);
      current_json_str = JSON.parse(content);
      result = JSON.stringify(current_json_str, null, 4);
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }

    var lines = result.split("\n");
    var indent = 2;

    // 对除首行以外的每一行进行额外的缩进
    for (var i = 1; i < lines.length - 1; i++) {
      lines[i] = " ".repeat(2) + lines[i];
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' +
      lines.join("\n") +
      "</span>";

    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
});

$("#json-src5").keyup(function () {
  init();
  var content = $.trim($(this).val());
  var result = "";
  if (content != "") {
    //如果是xml,那么转换为json
    if (content.substr(0, 1) === "<" && content.substr(-1, 1) === ">") {
      try {
        var json_obj = $.xml2json(content);
        content = JSON.stringify(json_obj);
      } catch (e) {
        result =
          '解析错误：<span style="color: #f1592a;font-weight:bold;">' +
          e.message +
          "</span>";
        current_json_str = result;
        $("#json-target").html(result);
        return false;
      }
    }
    try {
      var e = JSON5.parse(content);
      result = JSON5.stringify(e, null, 4);
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }
    var lines = result.split("\n");
    var indent = 2;

    // 对除首行以外的每一行进行额外的缩进
    for (var i = 1; i < lines.length - 1; i++) {
      lines[i] = " ".repeat(2) + lines[i];
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' +
      lines.join("\n") +
      "</span>";

    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
});

function formatJson1() {
  init();
  var textarea = document.getElementById("json-src");

  // 获取文本内容
  var value = textarea.value;
  var content = $.trim(value);
  var result = "";
  if (content != "") {
    //如果是xml,那么转换为json
    if (content.substr(0, 1) === "<" && content.substr(-1, 1) === ">") {
      try {
        var json_obj = $.xml2json(content);
        content = JSON.stringify(json_obj);
      } catch (e) {
        result =
          '解析错误：<span style="color: #f1592a;font-weight:bold;">' +
          e.message +
          "</span>";
        current_json_str = result;
        $("#json-target").html(result);
        return false;
      }
    }
    try {
      var e = JSON5.parse(content);
      result = JSON5.stringify(e, null, 4);
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }
    var lines = result.split("\n");
    var indent = 2;

    // 对除首行以外的每一行进行额外的缩进
    for (var i = 1; i < lines.length - 1; i++) {
      lines[i] = " ".repeat(2) + lines[i];
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' +
      lines.join("\n") +
      "</span>";

    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
}

function formatJson5() {
  init();
  var textarea = document.getElementById("json-src5");

  // 获取文本内容
  var value = textarea.value;
  var content = $.trim(value);
  var result = "";
  if (content != "") {
    //如果是xml,那么转换为json
    if (content.substr(0, 1) === "<" && content.substr(-1, 1) === ">") {
      try {
        var json_obj = $.xml2json(content);
        content = JSON.stringify(json_obj);
      } catch (e) {
        result =
          '解析错误：<span style="color: #f1592a;font-weight:bold;">' +
          e.message +
          "</span>";
        current_json_str = result;
        $("#json-target").html(result);
        return false;
      }
    }
    try {
      var e = JSON5.parse(content);
      result = JSON5.stringify(e, null, 4);
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }
    var lines = result.split("\n");
    var indent = 2;

    // 对除首行以外的每一行进行额外的缩进
    for (var i = 1; i < lines.length - 1; i++) {
      lines[i] = " ".repeat(2) + lines[i];
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' +
      lines.join("\n") +
      "</span>";

    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
}

$("#right-box").keyup(function () {
  var text = $("#json-target")
    .html()
    .replace(/<br\/>/g, "\n")
    .replace(/<br>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/Object{...}/gi, "")
    .replace(/Array\[[0-9]+\]/gi, "");
  if (isXml) {
    $("#json-src").val($.json2xml(JSON.parse(text)));
  } else {
    $("#json-src").val(text);
  }
});
$(".xml").click(function () {
  if (xml_flag) {
    $("#json-src").keyup();
  } else {
    var result = $.json2xml(current_json);
    $("#json-target").html(
      '<textarea style="width:100%;position:absolute;height: 80vh;min-height:480px;border:0;resize:none;">' +
        result +
        "</textarea>"
    );
    xml_flag = true;
    $(this).attr("style", "color:#15b374;");
  }
});
$(".shown").click(function () {
  if (!shown_flag) {
    renderLine();
    $("#line-num").show();
    $(".numberedtextarea-line-numbers").show();
    shown_flag = true;
    $(this).attr("style", "color:#15b374;");
  } else {
    $("#line-num").hide();
    $(".numberedtextarea-line-numbers").hide();
    shown_flag = false;
    $(this).attr("style", "color:#999;");
  }
});

function renderLine() {
  var line_num = $("#json-target").height() / 20;
  $("#line-num").html("");
  var line_num_html = "";
  for (var i = 1; i < line_num + 1; i++) {
    line_num_html += "<div>" + i + "<div>";
  }
  $("#line-num").html(line_num_html);
}

function compressionj5() {
  init();
  var textarea = document.getElementById("json-src5");

  // 获取文本内容
  var value = textarea.value;
  var content = $.trim(value);
  var result = "";
  if (content != "") {
    try {
      var e = JSON5.parse(content);
      result = JSON5.stringify(e).toString();
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' + result + "</span>";
    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
}

function compressionj1() {
  init();
  var textarea = document.getElementById("json-src");

  // 获取文本内容
  var value = textarea.value;
  var content = $.trim(value);
  var result = "";
  if (content != "") {
    try {
      var e = JSON.parse(content);
      result = JSON.stringify(e).toString();
    } catch (e) {
      result =
        '<span style="color: #f1592a;font-weight:bold;">' + e + "</span>";
      current_json_str = result;
    }
    var rr =
      '<span style="white-space: pre;font-weight: bold;">' + result + "</span>";
    $("#json-target").html(rr);
  } else {
    $("#json-target").html("");
  }
}

$(".zip").click(function () {
  // if (zip_flag) {
  //     $('#json-src').keyup();
  // } else {
  //     //$('#json-target').html(current_json_str.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
  //     $('#json-target').html("<xmp>" + current_json_str + "</xmp>");
  //     zip_flag = true;
  //     $(this).attr('style', 'color:#15b374;');
  // }
  compressionj1();
});

$(".zip1").click(function () {
  compressionj5();
});

$(".unzip1").click(function () {
  formatJson5();
});

$(".zip2").click(function () {
    compressionj1();
  });
  
  $(".unzip2").click(function () {
    formatJson1();
  });
$(".compress").click(function () {
  if (!compress_flag) {
    $(this).attr("style", "color:#15b374;");
    //$(this).attr('title','取消折叠').tooltip('fixTitle').tooltip('show');
    $($(".fa-minus-square-o").toArray().reverse()).click();
    compress_flag = true;
  } else {
    while ($(".fa-plus-square-o").length > 0) {
      $(".fa-plus-square-o").click();
    }
    compress_flag = false;
    $(this).attr("style", "color:#555;");
    $(this).attr("title", "折叠").tooltip("fixTitle").tooltip("show");
  }
});
$(".clear").click(function () {
  $("#json-src").val("");
  $("#json-target").html("");
  $("#json-src5").val("");
  $("#json-target5").html("");
});
$(".share").click(function () {
  $("#hidden-message-box").hide();
  try {
    var jqxhr = $.post(
      "/shares/",
      { content: current_json_str },
      function (data) {
        var k = data;
      }
    )
      .success(function (data) {
        window.location.href = "share.html?k=" + data;
      })
      .error(function (data) {
        $("#hidden-message-box").hide();
        if (data.status <= 400 && data.status > 200) {
          $("#hidden-message").html(data.responseText);
        } else if (data.status > 400) {
          $("#hidden-message").html("服务器升级中...此功能暂不可用.");
        }
        $("#hidden-message-box").show();
      })
      .done(function (data) {
        $("#hidden-message-box").hide();
        if (data.responseText != undefined) {
          $("#hidden-message").html(data.responseText);
        } else {
          $("#hidden-message").html("服务器升级中...此功能暂不可用.");
        }
        $("#hidden-message-box").show();
      })
      .complete(function (data) {
        $("#hidden-message-box").show();
      });
  } catch (e) {
    $("#hidden-message-box").show();
  } finally {
    setTimeout(function () {
      $("#hidden-message-box").hide();
    }, 3000);
  }
});
$(".fullScreen").click(function () {
  $("#dragEle").css("left", "");
  $("main .col-md-7").css("width", "");
  $("main .col-md-5").css("width", "");
  $(".editor-con").toggleClass("editor-full-screen");
  $("body").toggleClass("overflow-hidden");
  $(".fullScreen .fa").toggleClass("fa-minus fa-arrows-alt");
  if ($(this).attr("data-original-title") === "全屏") {
    $(this).attr("data-original-title", "最小化");
  } else {
    $(this).attr("data-original-title", "全屏");
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
          this[i].innerHTML
            .replace(/&amp;lt;br&amp;gt;/gi, "n")
            .replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
        }
      }
      return this;
    } else {
      if (document.body.innerText) {
        return this[0].innerText;
      } else {
        return this[0].innerHTML
          .replace(/&amp;lt;br&amp;gt;/gi, "n")
          .replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
      }
    }
  };
})(jQuery);
$(".save").click(function () {
  // var content = JSON.stringify(current_json);
  // $('#txt-content').val(content);
  //var text = "hell world";
  var html = $("#json-target")
    .html()
    .replace(/\n/g, "<br/>")
    .replace(/\n/g, "<br>");
  var text = $("#json-target").innerText().replace("　　", "    ");
  var blob = new Blob([text], { type: "application/json;charset=utf-8" });
  var timestamp = new Date().getTime();
  saveAs(blob, "format." + timestamp + ".json");
});
$(".copy").click(function () {
  //$.msg("成功复制到粘贴板","color:#00D69C;");
  // $(this).tooltip('toggle')
  //       .attr('data-original-title', "复制成功！")
  //       .tooltip('fixTitle')
  //       .tooltip('toggle');
});
var clipboard = new Clipboard(".copy");
$("#json-src").keyup();

//拖拽
var totalWidth = $(window).outerWidth();
var forbidenWidth = totalWidth - 400;
$("#dragEle").myDrag({
  parent: "parent", //定义拖动不能超出的外框,拖动范围
  randomPosition: false, //初始化随机位置
  direction: "x", //方向
  handler: false, //把手
  dragStart: function (x, y) {
    totalWidth = $(window).outerWidth();
    forbidenWidth = totalWidth - 400;
  }, //拖动开始 x,y为当前坐标
  dragEnd: function (x, y) {
    //必须重新计算禁止拖拽width，否则直接执行dragend的时候界面会渲染错误
    totalWidth = $(window).outerWidth();
    forbidenWidth = totalWidth - 400;
    if (x > forbidenWidth) {
      $("#dragEle").offset({ top: 0, left: forbidenWidth - 5 });
      $("main .col-md-5").width(forbidenWidth);
      $("main .col-md-7").width(totalWidth - forbidenWidth);
    } else if (x < 200) {
      $("#dragEle").offset({ top: 0, left: 195 });
      $("main .col-md-5").width(200);
      $("main .col-md-7").width(totalWidth - 200);
    } else {
      $("main .col-md-5").width(x);
      $("main .col-md-7").width(totalWidth - x - 1);
    }
  }, //拖动停止 x,y为当前坐标
  dragMove: function (x, y) {
    if (x > forbidenWidth || x < 200) {
    } else {
      $("main .col-md-5").width(x);
      $("main .col-md-7").width(totalWidth - x - 1);
    }
  }, //拖动进行中 x,y为当前坐标
});
$(window).resize(function () {
  $("#dragEle").css("left", "");
  $("main .col-md-7").css("width", "");
  $("main .col-md-5").css("width", "");
});

// $('select.chosen-select').chosen({
//     no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
//     disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
//     search_contains: true         // 从任意位置开始检索
// });
//搜索
$("select.chosen-select").on("change", function () {
  window.location.href = $(this).val();
  // window.location.href = "/" + $('#t_mod').val() + "/search-" + $('#t_keyword').val()
});

/*收藏*/
$("body").on("click", ".xf-collection", function () {
  alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!");
});
