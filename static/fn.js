let doc = document.getElementById("_code")
let out = document.getElementById("output")
doc.value = "#include<bits/stdc++.h> \nusing namespace std;\nint main(){\n\n}"
async function getRes() {
	let data = new URLSearchParams()
	let fd = new FormData(document.getElementById("_program"))
	for (let [a, b] of fd) {
		data.append(a, b)
	}
	let res = await fetch('/run', { method: "POST", body: data });
	let pt = await res;
	let txt = await pt.text()
	out.innerText = txt
}