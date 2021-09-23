function comma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

fetch('https://corona.lmao.ninja/v2/countries/Australia')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  document.getElementById("cases").innerHTML = comma(data.cases);
  document.getElementById("new-cases").innerHTML = `+${comma(data.todayCases)}`;
  document.getElementById("recover").innerHTML = comma(data.recovered);
  document.getElementById("new-recover").innerHTML = `+${comma(data.todayRecovered)}`;
  document.getElementById("deaths").innerHTML = comma(data.deaths);
  document.getElementById("new-deaths").innerHTML = `+${comma(data.todayDeaths)}`;
  document.getElementById("active").innerHTML = comma(data.active);
  document.getElementById("new-active").innerHTML = `+${comma(data.todayCases-data.todayRecovered-data.todayDeaths)}`;
})

fetch('https://api.covid19api.com/summary')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  document.getElementById("w-cases").innerHTML = comma(data.Global.TotalConfirmed);
  document.getElementById("w-new-cases").innerHTML = `+${comma(data.Global.NewConfirmed)}`;
  document.getElementById("w-deaths").innerHTML = comma(data.Global.TotalDeaths);
  document.getElementById("w-new-deaths").innerHTML = `+${comma(data.Global.NewDeaths)}`;
})

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("date").innerHTML = date;