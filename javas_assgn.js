var arrimg=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg","image10.jpg"]
    var i=0;
    
    function slideshow(){
       
        console.log(arrimg[i]);
        document.getElementById("img").setAttribute("src",arrimg[i]);
        if(i<9){
            i++;
        }
        else{
            setTimeout();
        }        
    }
    function startshow(){
        var x= document.getElementById("interval").value;
        console.log(x);
        setInterval(slideshow,x);
    }



function add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)+Number(num2);
    document.getElementById("ans").innerHTML=sum;
}

function mul(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)*Number(num2);

    document.getElementById("ans").innerHTML=sum;
}

function sub(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)-Number(num2);
    document.getElementById("ans").innerHTML=sum;
    $("#ans").css("background-color", "");
}

function div(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)/Number(num2);
    document.getElementById("ans").innerHTML=sum;
}
    




  $("#email").blur(function(){
   
    var email=document.getElementById("email").value;
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res= re.test(email);
    if(res==true){
        $(this).css("background-color", "green");
        $('#email').css({"color" : "white"});
    }
    else{
        $(this).css("background-color", "red");
        $('#email').css({"color" : "white"});    }
  });
