let lstCol=["red","blue","black","green","yellow","maroon","orange"];
let docCod=document.getElementById("_cod");
	docCod.addEventListener("keydown",(e)=>{
	spaceIt(e)
})
function getRand(){
	return Math.floor(Math.random()*1000000)
}
function colorIt(it){
	let flr=Math.floor(Math.random()*lstCol.length)
	it.style.color= lstCol[flr]
	console.log(it.style.color)
}
function spaceIt(e){
	if(e.key=="Enter")
	{
		let le=docCod.children
		if(le.length>0)
		(le[le.length-1]).style.color=lstCol[getRand()%lstCol.length]
	}
}