function fun(){
var b=document.getElementById("uni").value
var a=document.getElementById("val")
var c=document.getElementById("result")
var d=document.getElementById("convert").value
 if(b === "kilometer"){
    if(d==="meter"){
	c.value=a.value *1000}
	else if(d==="centimeter"){
		c.value=a.value * 100000
	}else{c.value="don't use same units"}
}

 else if(b === "meter"){ 
	    if(d === "kilometer"){
		c.value=a.value / 1000 }
	 
     else if(d==="centimeter"){
	c.value=a.value * 100;
}else{c.value="don't use same units"}
 }
     
  else if(b === "centimeter"){ 
	    if(d === "kilometer"){
		c.value=a.value / 1000 }
	 
     else if(d==="meter"){
	c.value=a.value / 100;
}else{c.value="don't use same units"}
 }
 
      else if(b === "inch"){ 
	    if(d === "kilometer"){
		c.value=a.value / 39370 }
	 
     else if(d==="meter"){
	c.value=a.value / 39.37;
	
}
      else if(d==="centimeter"){
	c.value=a.value / 2.54;
}
else{c.value="don't use same units"}
 }
 
}
 
