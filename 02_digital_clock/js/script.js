const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const span=document.querySelectorAll('.meridian span');
const days_span=document.querySelectorAll('.days span');
const month_span=document.querySelectorAll('.month span');
const date=document.querySelector('.date');


function runClock(){
  var time=new Date();
  //Date
  var da=time.getDate();
  da=da<10?'0'+da:da;
  var mo=time.getMonth()+1;
  mo=mo<10?'0'+mo:mo;
  var ye=time.getFullYear();
  date.innerHTML=`${da}-${mo}-${ye}`;
  //Day
  days_span[time.getDay()].classList.add('day-active');
  //Month
  month_span[time.getMonth()].classList.add('day-active');
  //Time
  var hrs=time.getHours();
  var min=time.getMinutes();
  var sec=time.getSeconds();

  if(hrs>12){
    hrs=hrs-12;
    span[1].classList.add('active');
  }else{
    if(hrs==0){
      hrs=12; 
    }
    span[0].classList.add('active');
  }

  hrs=hrs<10?'0'+hrs:hrs;
  min=min<10?'0'+min:min;
  sec=sec<10?'0'+sec:sec;

  hrs=hrs.toString(); //04
  min=min.toString();
  sec=sec.toString();

h[0].innerHTML=hrs[0];//0
h[1].innerHTML=hrs[1];//4

m[0].innerHTML=min[0];
m[1].innerHTML=min[1];

s[0].innerHTML=sec[0];
s[1].innerHTML=sec[1];

}

setInterval(runClock,1000);
