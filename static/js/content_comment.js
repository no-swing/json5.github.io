/*我的评论 分页*/
layui.use('laypage', function(){
    var laypage = layui.laypage;
    //建造实例
    laypage.render({
        elem: 'newsPaging' //注意，这里的 newsPaging 是 ID，不用加 # 号
        ,count: 50 //数据总数，从服务端得到
    });

    //建造实例
    laypage.render({
        elem: 'commentPaging' //注意，这里的 commentPaging 是 ID，不用加 # 号
        ,count: 50 //数据总数，从服务端得到
    });


    laypage.render({
        elem: 'receivePaging' //注意，这里的 receivePaging 是 ID，不用加 # 号
        ,count: 50 //数据总数，从服务端得到
    });

});