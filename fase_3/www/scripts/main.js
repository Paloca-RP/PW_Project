window.load = function (event) {
    var info = new Information("Insert_alunos")
    var info1 = new Information("Insert_Disc")
    info.getAluno()
    info.getDisciplina()
    window.info = info
    window.info1 = info1
};

function HTTPRequest(type, url, callback)
{
    let xhttp = new XMLHttpRequest();
    xhttp.open(type, url);
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            callback(this.response);
        }      
    };
    xhttp.send();
}