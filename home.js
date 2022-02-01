
function check(){

    
   
      

    var number = document.getElementById("num").value
    output = [],
    sNumber = number.toString();
   
    
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
         output.push(+sNumber.charAt(i));
     
        
    } 
    if (len == 0)
    { 
          alert("Please fill in the required field");  	
          return;
    }
        var rez = output.map(x => x**len)
        var sum = 0;
        for (var j = 0; j < rez.length; j += 1) {
            sum += rez[j];
        }
       
    console.log(output);
    console.log(rez);
    console.log(sum);
    $(".home").fadeOut(900);
    $(".rezz").delay(900).fadeIn(900);
    
    if(sum == number){
       

        document.getElementById("rez").innerHTML = "Number is Narcissist";
        $('body').css({
                background: "linear-gradient(to right, #21a565 1%,#29d8d2 50%,#20a6cc 100%,#7db9e8 100%)"
            });

    }
    else if(sum != number){
        document.getElementById("rez").innerHTML = "Number is  not Narcissist";
        $('body').css({
            background: "linear-gradient(to right, #b72424 1%,#bc3a8c 51%,#e0383a 100%)"
        });
    }
}