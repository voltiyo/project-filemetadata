var express = require('express');
var cors = require('cors');
var multer = require("multer")
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const storage = multer.memoryStorage()
const upload = multer({storage: storage})
app.post("/api/fileanalyse",upload.single("upfile"), (req, res) => {
  let file = req.file;
  let name = file.originalname;
  let type = file.mimetype;
  let size = file.size;
  res.send({
    name: name,
    type: type,
    size, size,
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
