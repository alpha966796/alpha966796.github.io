$(document).ready(function(){
    window.setInterval(function () {
        var a = moment("07/18/2021 03:00:00");
        var b = moment();
        var c = b.diff(a)
        $('#clock').html(moment.duration(c).format("Y [year] D [day] H [hour] m [min and] s [second]"))
    }, 1000);
});
