

const API_KEY="";
  async function fetchWeatherDetails(){
    try{
        let city="goa";
        const response=await fetch(``);
        const data=await response.json();
         
        console.log("Weather data:> " , data);

        //let newPara =document.createElement('p');
        //new.Para.textContent=$---

        renderWeatherInfo(data);
    }

    catch(err){
        //hand the error here
    }
    https://api.openweather.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
  }


  

  async function getCustomWeatherDetails(){
    try{
        let lati=17.2656;
        let long=18.3235;
    
        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`);
    
        let data=await result.json();
    
        console.log(data);
    }
    catch(err){
        console.log("error fonnd",err); 
    }
    
  }

  function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //getFromSessionStorage();
        }
        //console.log("Current Tab,currentTab");
    }
  }


  function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geolocation support");
    }
  }

  function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
  }