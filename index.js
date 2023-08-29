var display=document.querySelector(".display");
var button=document.querySelectorAll(".btn");

//string that is to be computed and displayed in display
let string="";

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(e){
        var buttonpressed=e.target.innerHTML;
        if(buttonpressed=='='){
            var lastchar=string[string.length-1];
            if(lastchar=='+'||lastchar=='-'||lastchar=='*'||lastchar=='/'||lastchar=='%'){
                alert("Wrong input expression");
            }else{
            display.innerHTML=eval(string);
            }
        }else if(buttonpressed=='X'){
            string=string.slice(0,-1);
            display.innerHTML=string;
        }else{
            if((buttonpressed=='+'||buttonpressed=='-'||buttonpressed=='*'||buttonpressed=='/'||buttonpressed=='%'||buttonpressed=='.')){
                if(string=="")
                alert("Enter the number first");
                var lastchar=string[string.length-1];
                if(lastchar!='+'&&lastchar!='-'&&lastchar!='%'&&lastchar!='*'&&lastchar!='/'&&lastchar!='.'){
                    string=string+e.target.innerHTML;
                    display.innerHTML=string;
                }
            }else{
                string=string+buttonpressed;
                display.innerHTML=string;
            }
        }
        if(buttonpressed=='C'){
            string="";
            display.innerHTML=string;
        }
    });
}
