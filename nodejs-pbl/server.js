//const:定数を宣言する
const http = require("http"); //http serverとクライアントを使用する：require("http")
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");//fs:ファイルを処理するモジュール

//webサーバーを作る
const server = http.createServer((req, res) => {//ブラウザからアクセスが来た時の処理,=>(アロー関数)
    res.writeHead(200,{"Content-type":"text/html"}); //httpのステータスコード：200（成功）
    res.write(html);
    res.end();

    if(req.method == "GET") {
    }

    if(req.method == "POST") {
    }
})

server.listen(PORT,() => { //サーバーをどのPORT（港）で作る？
    console.log("server running!") //console:ブラウザのコンソールに任意のメッセージや値を表示する
});