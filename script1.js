function timer()
{
    document.getElementById("gif1").style.display="none"
    document.getElementById("gif2").style.display="initial"



    var dt=document.getElementById("birthdaytime").value
    var newdate=new Date(dt)
     
    var x = setInterval(function() 
    { 
        var dateTime=new Date()
        var now = dateTime.getTime();
        // var a=dateTime.getDate()+'-'+(dateTime.getMonth()+1)+'-'+dateTime.getFullYear()+' '+dateTime.getHours() + ":" + dateTime.getMinutes();
        // var b=newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear()+' '+newdate.getHours() + ":" + newdate.getMinutes();
        
        // document.getElementById("present").innerHTML=a
        // document.getElementById("future").innerHTML=b 
        var t = newdate - now; 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((t % (1000 * 60)) / 1000); 
        document.getElementById("demo").innerHTML = days + "d "  
        + hours + "h " + minutes + "m " + seconds + "s "; 
            if (t < 0) { 
                clearInterval(x); 
                document.getElementById("demo").innerHTML = "EXPIRED"; 
            } 
    }, 1000);
    
}

