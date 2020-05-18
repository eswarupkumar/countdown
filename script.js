function done()
{
    var finaldate=document.getElementById("example-datetime-local-input").value
    var d=new Date(finaldate)
    
    var ftime=document.getElementById("appt").value
    var fdate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear(); 
    var fdateTime = fdate+' '+ftime+':'+0;
    console.log(fdateTime)
    // document.getElementById("output").innerHTML=date
    console.log(fdateTime.getTime())
    var [hr,min]=ftime.split(":")

    // if ((d>=today || (d!=today))){
    //     // document.getElementById("output").innerHTML=dateTime
    //     console.log("right")
    //     // document.getElementById("output").innerHTML=date

    // }
    if (d>=today || todayd(d)){
        document.getElementById("present").innerHTML=dateTime
        document.getElementById("future").innerHTML=fdateTime
        var x=setInterval(function(){

        },1000);
        
    }
    function todayd(d){
        return d.getDate() == today.getDate() &&
        d.getMonth() == today.getMonth() &&
        d.getFullYear() == today.getFullYear()
    }

}

var today=new Date();
var da=today.getDate();
var m=today.getMonth();
var y=today.getFullYear();
var h=today.getHours();
var mi=today.getMinutes();
var sec=today.getSeconds();
// console.log(d)
// console.log(m+1)
// console.log(y)
// console.log(h)
// console.log(mi)
// console.log(sec)

// console.log(date.getDate())
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)



function timer(){
    var dt=document.getElementById("birthdaytime").value
    var newdate=new Date(dt).getTime();
    console.log(newdate)

}

 