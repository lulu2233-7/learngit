$(function(){
     //一开始就加载
    loadtag()
    loadmemo()
    
    //重新加载函数
    function reloadmemo(){
        $('#check-ul2').empty()
        $('#check-ul').empty()
        loadmemo()
    } 
/*
    // 读取数据函数
    function loadtag(){
        // 渲染收藏页面数据
        $.ajax({
            type: "post",
            url: "server/readdata.php",  //同目录下的php文件
            dataType:"json", //声明成功使用json数据类型回调
            success: function(msg){  //请求成功后的回调函数
            $.each(msg, function(i, date){
            $("#tj").prepend("<a href='"+date[3]+"'><span class='circle'><img src='"+date[0]+"'></span><div class='text'>"+date[1]+"</div><div class='write'>"+date[2]+"</div></a>")
            })
            }
        })
    }*/

     function loadmemo(){
        // 渲染备忘录数据
        $.ajax({
            type: "post",
            url: "function/perform.php",  
            dataType:"json", 
            success: function(msg){   //msg 回调函数的参数 一般是你ajax调用方法的返回值
            $.each(msg, function(i, date){  //

                $("#check-ul").prepend('<li><span class="nocheck">&#xe690;</span><span>'+date[1]+'</span><span class="right" >&#xe621;</span></li>')
            /* if(date[2] === "0"){
                $("#check-ul").prepend('<li><span class="nocheck">&#xe690;</span><span>'+date[1]+'</span><span class="right" >&#xe621;</span></li>')
            }else{
                $("#check-ul2").prepend('<li><span class="nocheck">&#xe64b;</span><span>'+date[1]+'</span><span class="right" >&#xe621;</span></li>')}
             */})   //在#check-ul前面插入 这些东西<li><span class="nocheck">&#xe690;</span><span>'+date[1]+'</span><span class="right" >&#xe621;</span></li>
        }
        })
   
    }
        
/*    // 弹出添加页
    $("#add").on("click",function(){
        $("#login").show()
    })

    // 取消按键
    $("#qx").on("click",function(){
        $("#login").hide()
    })

    // 确定按键
    $("#ok").on("click", function(){
        var title = $("#input1").val()
        var describes = $("#input2").val()
        var  link = $("#input3").val()

        var infor = "title="+title+"&describes="+describes+"&link="+link

        if (title == "" || describes =="" || link ==""){
            alert("请输入完整信息")    
        }
        else{
            $.ajax({
                type: "post",
                url: "server/add.php",
                data:infor, 
                success: function(msg){
                    console.log(msg)
                    //添加成功后，隐藏和清除值
                    $("#login").hide()
                    $("#input1").val('')
                    $("#input2").val('')
                    $("#input3").val('')
                    //清空后重新加载
                    $('#tj').empty()
                    loadtag()
                    }
                    })
            }
       
    })

    // 百度一下
    $('#seach').on("click",function(){
        if ($('#textbox').val() == "") {
            location.href="http://www.baidu.com";
        }else{
            location.href="http://www.baidu.com/s?wd="+$('#textbox').val()
        }
    })

    //百度一下聚焦事件
    $('#textbox').focus(function(){
        $('#mask').toggle()
    })

    //备忘录的伸缩功能
    $('#notfinished,#finished').on("click",  function(){
        // console.log($(this).children()[0].html());
        // console.log($(this).children()[0].text());
        // 上面两个为什么不运行不了
        
    
        if($(this).next().css("display")=="block"){
            $(this).children()[0].innerHTML='&#xe666;'
            $(this).next().css("display","none")
        }else{
            $(this).children()[0].innerHTML='&#xe665;'
            $(this).next().css("display","block")
        }

    }) */

    //备份路事件的增删改

    //增
    $('#check-btn').on("click",function(){
        var event = $('#check-text').val()
        if (event == ""){
            alert("请输入内容！")    
        }
        else{
            $.ajax({
                type: "post",
                url: "server/add2.php",
                data:"event="+event, 
                success: function(msg){
                    console.log(msg)
                    //添加成功后，隐藏和清除值
                    $('#check-text').val('')
                    //清空后重新加载
                    reloadmemo()
                    }
                    })
            }
    })
//  删
//  动态添加的元素已经不能用常规的事件选中了
//  jquery1.7+版本
//  $("父元素").on("click","子元素",function(){
//  do
//  });
    $("#check-ul2,#check-ul").on("click",".right",function(){
        var del = $(this).prev().text()  //？  .prev() 找到this的上个一个同级邻近元素  .text()表示：的文本。
        $.ajax({
            type: "post",
            url: "server/del.php",
            data:"del="+del, 
            success: function(msg){
                console.log(msg)
                //清空后重新加载
                reloadmemo()
                }
            })
    })
    

    //改
    $("#check-ul").on("click",".nocheck",function(){
        var revise = $(this).next().text()
        
        $.ajax({
            type: "post",
            url: "server/revise.php",
            data:"revise="+revise, 
            success: function(msg){
                console.log(msg)
                //清空后重新加载
                reloadmemo()
                }
            })
    })

    $("#check-ul2").on("click",".nocheck",function(){
        var revise = $(this).next().text()
       
        $.ajax({
            type: "post",
            url: "server/revise2.php",
            data:"revise="+revise, 
            success: function(msg){
                console.log(msg)
                //清空后重新加载
                reloadmemo()
                }
            })
    })

})