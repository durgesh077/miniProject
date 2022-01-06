let express = require("express")
let path = require("path")
let bodyParser = require("body-parser")
let fs = require("fs")
let app = express()
let proc = require("child_process")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")))
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/run", (req, res) => {
	let body = req.body
	let text = body.input
	fs.writeFile("in.txt", body.input, (err) => {

		if (err)
			res.sendStatus(404)
		else {
			fs.writeFile("ghf.cpp", body.code, (err) => {
				if (err)
					res.sendStatus(404)
				else {
					proc.exec("g++ ghf.cpp && a.exe < in.txt ", (err, resOfCpp) => {
						if (err) { res.send(err.toString()); }
						else {
							//console.log(`<pre>${resOfCpp.toString()}<pre>`)
							res.send(resOfCpp.toString())
							//res.json({ result: `<pre>${resOfCpp.toString()}<pre>` })
						}
					})
				}
			})
		}
	})
})
app.listen(3000,"0.0.0.0", () => console.log('started'));