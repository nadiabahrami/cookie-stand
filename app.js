var hours =["10am: ","11am: ", "12pm: ","1pm: ","2pm: ", "3pm: ","4pm: ", "5pm: ", "Total: "];

var pike = {
  min:17,
  max:88,
  aveCookies: 5.2,
  total:0,
  custRandom: function(){
    return Math.round(Math.random()*(this.max-this.min)+ this.min);
  },
    cHours:[],
  hourly: function(){
    for(i=0; i<hours.length-1;i++){
      this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
      this.total+=this.cHours[i];
    };
    this.cHours.push(this.total);
  }
};

 function lists(id,location){
   var store = document.getElementById(id);
   var createUl = document.createElement("ul");
   createUl.appendChild(document.createTextNode('Hours'));
   for(i=0;i<hours.length;i++){
     var createLi = document.createElement("li");
     createLi.textContent = hours[i]+location.cHours[i]+" cookies";
     createUl.appendChild(createLi);
   };
   store.appendChild(createUl);
 }

var seatac = {
  min:6,
  max:44,
  aveCookies: 1.2,
  total:0,
  custRandom: function(){
    return Math.round(Math.random()*(this.max-this.min)+ this.min);
  },
    cHours:[],
  hourly: function(){
    for(i=0; i<hours.length-1;i++){
      this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
      this.total+=this.cHours[i];
    };
    this.cHours.push(this.total);
  }
};

var scMall = {
  min:11,
  max:38,
  aveCookies: 1.9,
  total:0,
  custRandom: function(){
    return Math.round(Math.random()*(this.max-this.min)+ this.min);
  },
    cHours:[],
  hourly: function(){
    for(i=0; i<hours.length-1;i++){
      this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
      this.total+=this.cHours[i];
    };
    this.cHours.push(this.total);
  }
};

var bellsq = {
  min:20,
  max:48,
  aveCookies: 3.3,
  total:0,
  custRandom: function(){
    return Math.round(Math.random()*(this.max-this.min)+ this.min);
  },
    cHours:[],
  hourly: function(){
    for(i=0; i<hours.length-1;i++){
      this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
      this.total+=this.cHours[i];
    };
    this.cHours.push(this.total);
  }
};

var alki = {
  min:3,
  max:24,
  aveCookies: 2.6,
  total:0,
  custRandom: function(){
    return Math.round(Math.random()*(this.max-this.min)+ this.min);
  },
    cHours:[],
  hourly: function(){
    for(i=0; i<hours.length-1;i++){
      this.cHours[i] = (Math.ceil(this.custRandom()*this.aveCookies));
      this.total+=this.cHours[i];
    };
    this.cHours.push(this.total);
  }
};

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
