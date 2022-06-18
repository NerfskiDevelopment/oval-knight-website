function FetchData(){
  console.log("Fetching");

  GetEcoData();
  GetLevelData();
  GetLoginData();
}
function GetEcoData(){
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/ecoData';
  
  http.open("GET", url);
  http.send();

  http.onreadystatechange=function(){
    if(this.readyState==4 && this.status == 200){
      var rawJson = JSON.parse(http.responseText);
      
      for(var i = 0; i < rawJson.length; i++){
        var object = rawJson[i];

        concurrentPlayerDates.push(object['key']);
        concurrentPlayerValues.push(parseInt(object['count']));
      }

      drawLineChart('maxPlayers', "Max Players", "Date", "Players", concurrentPlayerDates, concurrentPlayerValues, "Player Count");
    }
  }
}

function GetLevelData(){
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/lvlData';
  
  http.open("GET", url);
  http.send();

  http.onreadystatechange=function(){
    if(this.readyState==4 && this.status == 200){
      var rawJson = JSON.parse(http.responseText);
      
      for(var i = 0; i < rawJson.length; i++){
        var object = rawJson[i];

        lvlDataDates.push(object['key']);
        lvlDataValues.push(parseInt(object['count']));
      }

      drawLineChart('lvlData', "Levels Gained", "Date", "Levels", lvlDataDates, lvlDataValues, "Level Count");
    }
  }
}

function GetLoginData(){
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/loginData';
  
  http.open("GET", url);
  http.send();

  http.onreadystatechange=function(){
    if(this.readyState==4 && this.status == 200){
      var rawJson = JSON.parse(http.responseText);
      
      for(var i = 0; i < rawJson.length; i++){
        var object = rawJson[i];

        loginDataDates.push(object['key']);
        loginDataValues.push(parseInt(object['count']));
      }

      drawLineChart('loginData', "Logins", "Date", "Logins", loginDataDates, loginDataValues, "Login Count");
    }
  }
}
