var hours =["10am","11am", "12pm","1pm","2pm", "3pm","4pm", "5pm", "Total"];
function shop(min,max,aveCookies,storeFront) {
  this.min = min;
  this.max = max;
  this.aveCookies = aveCookies;
  this.storeFront = storeFront;
  this.cHours=[];
}

shop.prototype.custRandom = function () {
  return Math.round(Math.random()*(this.max-this.min)+ this.min);
};

shop.prototype.hourly = function () {
  this.total = 0;
  for(i=0; i<hours.length-1;i++){
    this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
    this.total+=this.cHours[i];
  };
  this.cHours.push(this.total);
};

var pike = new shop(17,88,5.2, "Pike Place Market");
var seatac = new shop(6,44,1.2,"SeaTac");
var scMall = new shop(11,38,1.9,"South Center Mall");
var bellsq = new shop(20,48,3.3, "Bellevue Square");
var alki = new shop(3,24,2.6, "Alki Beach");

var rows = [pike,seatac,scMall,bellsq,alki];

function render(lala){
  var makeTr = document.createElement("tr");
  var makeTh = document.createElement("th");
  makeTh.textContent= lala.storeFront;
  makeTr.appendChild(makeTh);
  lala.hourly();
  for(var i=0; i<hours.length; i++){
    var makeTd = document.createElement("td");
    makeTd.textContent = lala.cHours[i];
    makeTr.appendChild(makeTd);
  };
  makeTr.appendChild(makeTd);
  return makeTr;
};

function table(){
  produce = document.getElementById("sales");
  var makeTb = document.createElement("table");
  var makeTr = document.createElement("tr");
  var makeTh = document.createElement("th");
  makeTh.textContent= "Locations";
  makeTr.appendChild(makeTh);
  for(var i=0; i<hours.length; i++){
      var makeTh = document.createElement("th");
      makeTh.textContent = hours[i];
      makeTr.appendChild(makeTh)
  };
  makeTb.appendChild(makeTr);

  for(j=0; j<rows.length; j++){
    var makeTr = render(rows[j]);
    makeTb.appendChild(makeTr);
  };
  produce.appendChild(makeTb);
}
table();

var elFranchise = document.getElementById("franchise");
elFranchise.addEventListener("submit", function(event){
  event.preventDefault();
  var storeName = event.target.storeFront.value;
  var minimum = parseInt(event.target.min.value);
  var maximum = parseInt(event.target.max.value);
  var ave = parseInt(event.target.aveCookies.value);
  var stand = new shop(minimum,maximum,ave, storeName);
  rows.push(stand);
  produce.textContent =" ";
  table();
});
