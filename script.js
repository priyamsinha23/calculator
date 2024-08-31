const but= document.querySelectorAll('button') ;
let string ='' ; 
const inp= document.getElementById('input') ;

but.forEach(function(item){
  item.addEventListener('click', function(e){
if(e.target.innerHTML=='='){
    try{
    string= eval(string);
    inp.value=string ;
    } catch(error){
        inp.value='error';
        string='';
    }
}
else if(e.target.innerHTML=='AC'){ 
    string="";
    inp.value=string; 

}
else if(e.target.innerHTML=='DEL'){
    string=string.substring(0,string.length-1) ;
    inp.value=string ;
}
else if(e.target.innerHTML=='%')
{
    string= parseFloat(string/100).toString(); 
    inp.value=string;
}    
    else{
    string+=e.target.innerHTML; 
    inp.value=string; 
     

}
   
  })
})