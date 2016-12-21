
window.onload = checkConnection();
function checkConnection(){
	var topNode  =document.querySelector("html");
	if(navigator.onLine){
		if(topNode.style.visibility=="hidden"){
			alert("Welcome back! Your Internet is working fine");
		}
		topNode.style.visibility = "visible"; 
	}else{
		if(topNode.style.visibility=="visible"){
			alert("SORRY ! Internet connection lost");
		}
		topNode.style.visibility = "hidden"; 
	}
	setTimeout(function(){ checkConnection(); }, 3000);	
}