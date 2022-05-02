function LoadData(){
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/TopTen';
  http.open("GET", url);
  http.send();

  http.onreadystatechange=function(){
    if(this.readyState==4 && this.status == 200){
      var rawJson = JSON.parse(http.responseText);

      var inner = "";
      
      for(var i = 0; i < rawJson['L'].length; i++){
        var object = rawJson['L'][i];
        
        var name = object['name'];
        var lvl = object['lvl'];
        var placement = object['placement'];

        inner += "<div id='listing'><h1>" + lvl + "</h1><h3>" + name + "</h3></div>"
      }
      
      document.getElementById("top10").innerHTML = inner;
    }
  }
}