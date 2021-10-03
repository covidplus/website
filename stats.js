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

fetch('https://disease.sh/v3/covid-19/all')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  document.getElementById("w-cases").innerHTML = comma(data.cases);
  document.getElementById("w-new-cases").innerHTML = `+${comma(data.todayCases)}`;
  document.getElementById("w-deaths").innerHTML = comma(data.deaths);
  document.getElementById("w-new-deaths").innerHTML = `+${comma(data.todayDeaths)}`;
})
