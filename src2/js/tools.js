/**
 * Created by Andy on 2016/11/20.
 */
$(document).ready(function () {

    $("html").append('<div class="modal fade" id="msgbox0" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>');
    $("#msgbox0").load("../sys/msgbox.html");
    $("#header0").load("../sys/header.html");
    $("#footer0").load("../sys/footer.html");

});

function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}



function getUrlParams(targate1) {
    var data1 = [25,50,70,30,200,300,70 ];

    loop while true


    end loop
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
