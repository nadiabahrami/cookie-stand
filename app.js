var hours =["10am: ","11am: ", "12pm: ","1pm: ","2pm: ", "3pm: ","4pm: ", "5pm: ", "Total: "];


function shop(min,max,aveCookies) {
  this.min = min;
  this.max = max;
  this.aveCookies = aveCookies;
}

shop.prototype.custRandom = function () {
  return Math.round(Math.random()*(this.max-this.min)+ this.min);
};

shop.prototype.hourly = function () {
  this.total = 0;
  this.cHours=[];
  for(i=0; i<hours.length-1;i++){
    this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
    this.total+=this.cHours[i];
    console.log(this.total);
  };
  this.cHours.push(this.total);
  console.log(this.cHours);
};

var pike = new shop(17,88,5.2);
var seatac = new shop(6,44,1.2);
var scMall = new shop(11,38,1.9);
var bellsq = new shop(20,48,3.3);
var alki = new shop(3,24,2.6);

function lists(id,location){
 var store = document.getElementById(id);
 var createTr = document.createElement("tr");
 //createTr.appendChild(document.createTextNode('Hours'));
 for(i=0;i<hours.length;i++){
   var createTd1 = document.createElement("td");
   var createTd2 = document.createElement("td");
   createTd1.textContent = hours[i]
   createTd2.textContent = location.cHours[i]+" cookies";
   createTr.appendChild(createTd1);
   createTr.appendChild(createTd2);
 };
 store.appendChild(createTr);
}

pike.hourly();
lists("pikey",pike);
seatac.hourly();
lists("seatown",seatac);
scMall.hourly();
lists("mall",scMall);
bellsq.hourly();
lists("square",bellsq);
alki.hourly();
lists("beach",alki);
