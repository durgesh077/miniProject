let doc=document.getElementById("_code")
doc.value="/*Start Program */"
function getRes(){
	let data=new URLSearchParams()
	let fd =new FormData()
	data.append("code",doc.value);
	// console.log("data:"+doc.innerText)
	for (let [a,b] of data){console.log(b)}
}