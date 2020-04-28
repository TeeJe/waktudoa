/* waktudoa Module */
/* Magic Mirror
 * Module: waktudoa
 * Base on Hamid Zarrabi-Zadeh calculator
 * By Tjetjep Rustandi
 * License: GNU LGPL v3.0

 TERMS OF USE:
 	Permission is granted to use this code, with or
 	without modification, in any website or application
 	provided that credit is given to the original work
 	with a link back to PrayTimes.org.

 This program is distributed in the hope that it will
 be useful, but WITHOUT ANY WARRANTY.

 PLEASE DO NOT REMOVE THIS COPYRIGHT BLOCK
 */
 Module.register("waktudoa",{
 defaults: {

          lati: -6.3,
          long: 106.7,
          elev: 55,
          timeZones: 7,
           list: ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"],
           text: "T J",
           countdown:0,
           afterAlarmCount:180, //60 for 1 minutes showing shalat
           iqomahcount:600, //600 for 10 minutes waiting iqomah
           hidden:false,
           timerState:false,
           iqomahState:false,
           alarmtext:'',
          Tfajr:-7,
          Tsunrise:-0,
          Tdhuhr:+2,
          Tasr:+1,
          Tmaghrib:+3,
          Tisha:+7,
           CalcMethods: 'MWL',
 },


 getScripts: function() {
    return ["PrayTimes.js","moment.js"];
 },

 start: function() {
   Log.log("Starting module: " + this.name);
   var self = this;


   setInterval(function() {
     self.updateDom();
   }, 1000);
   // Set locale.
 },

 getDom: function(){
     const latitude = this.config.lati;
     const longitude = this.config.long;
     const location =[latitude,longitude];
     const timeZone = this.config.timeZones;
     var  hidden = this.config.hidden;
     var alarmtext = this.config.alarmtext;


     prayTimes.tune(
       {fajr:this.config.Tfajr,
        sunrise:this.config.Tsunrise,
        dhuhr:this.config.Tdhuhr,
        asr:this.config.Tasr,
        maghrib:this.config.Tmaghrib,
        isha:this.config.Tisha})

     var timeRemaining = function (time){
//console.log(time)
     var minutes = Math.floor(time/60);
     var seconds = time - (minutes*60);
//console.log(minutes);
//console.log(seconds);
     return {

                 'minutes': minutes,
                 'seconds': seconds }
     };

     var times = prayTimes.getTimes(new Date(),location,timeZone);
     var wrapper = document.createElement("div");
     var alarmWrapper = document.createElement("div");
     var alarm = document.createElement("h2");

     alarmWrapper.appendChild(alarm);

     wrapper.appendChild(alarmWrapper);

   var timer  = moment(Date.now()).format("HH:mm:ss");

   var fajrAlarm = times.fajr+":00";
   var dhuzhurAlarm = times.dhuhr+":00";
   var ashrAlarm = times.asr +":00";
   var maghAlarm = times.maghrib+":00";
   var isyAlarm = times.isha+":00";

     if (timer===fajrAlarm){
         this.config.hidden=true;
         this.config.timercount=true;
         this.config.alarmtext="Waktu Shalat Subuh..."
         this.config.countdown = this.config.afterAlarmCount;
         this.config.timerState=true;
         this.config.iqomahState=false;

     }

     if (timer===dhuzhurAlarm){
         this.config.hidden=true;
         this.config.timercount=true;
         this.config.alarmtext="Waktu Shalat Dzhuhur..."
         this.config.countdown = this.config.afterAlarmCount;
         this.config.timerState=true;
         this.config.iqomahState=false;

     }

     if (timer===ashrAlarm){
         this.config.hidden=true;
         this.config.timercount=true;
         this.config.alarmtext="Waktu Shalat Ashar..."
         this.config.countdown = this.config.afterAlarmCount;
         this.config.timerState=true;
         this.config.iqomahState=false;

     }

     if (timer===maghAlarm){
         this.config.hidden=true;
         this.config.timercount=true;
         this.config.alarmtext="Waktu Shalat Maghrib..."
         this.config.countdown = this.config.afterAlarmCount;
         this.config.timerState=true;
         this.config.iqomahState=false;

     }

     if (timer===isyAlarm){
         this.config.hidden=true;
         this.config.timercount=true;
         this.config.alarmtext="Waktu Shalat Isha..."
         this.config.countdown = this.config.afterAlarmCount;
         this.config.timerState=true;
         this.config.iqomahState=false;

     }

     if (this.config.timercount)
     {
         this.config.countdown= this.config.countdown-1;
     }

     if (this.config.countdown<0 && this.config.timercount)
     {

         if (this.config.timerState && !this.config.iqomahState){

             this.config.timerState=false;
             this.config.iqomahState=true;
             this.config.countdown=this.config.iqomahcount;
             this.config.alarmtext="Iqomah... "
         }

        else if (this.config.iqomahState)
         {
             this.config.timercount=false;
             this.config.countdown="0";
             this.config.hidden=false;
             hidden=false;

             var otherModules = MM.getModules().exceptModule(this);
             otherModules.enumerate(function(module){
                 module.show();
             }

             )
         }
     }

     var table = document.createElement("table");
     if (hidden){
         var remains = timeRemaining(this.config.countdown);
         var minutes ="";
         var seconds="";
         if (remains.minutes<10){
             minutes = "0" + remains.minutes;
         }
         else
         {
             minutes = remains.minutes;
         }

         if (remains.seconds<10){
             seconds = "0" + remains.seconds;
         }
         else
         {
             seconds = remains.seconds;
         }
         table.className="hidden";
         alarm.className="showalarm";
//add fornt and color
         alarm.className = "thin large5 bright";
         alarm.style.color = "#28cb24"; //hijau terang
//
         var countTimer = " " + minutes + ":" + seconds;
         if (this.config.iqomahState){
         alarm.innerHTML= this.config.alarmtext + countTimer
         }
         if (this.config.timerState){
         alarm.innerHTML= this.config.alarmtext;
         }

// console.log("suspen");
         var otherModules = MM.getModules().exceptModule(this);
         otherModules.enumerate(function(module){
             module.hide();
         })
     }
     else{
// console.log("got called 2");
         alarmWrapper.className="hidden";

     table.className="medium doatable";
     }


//
//     wrapper.className = "thin large light";
     wrapper.style.textAlign = "center";
//
     var rowHead = document.createElement("tr");

     var subuhHead  =document.createElement("th");
     //
     //subuhHead.className = "thin large normal";
     //
     subuhHead.innerHTML="Subuh";
     rowHead.appendChild(subuhHead);

     var sunriseHead = document.createElement("th");
     sunriseHead.innerHTML="Syuruq";
     rowHead.appendChild(sunriseHead);

     var dzuhurHead = document.createElement("th");
     dzuhurHead.innerHTML="Dzhuhur";
     rowHead.appendChild(dzuhurHead);

     var asrHead = document.createElement("th");
     asrHead.innerHTML="Ashar";
     rowHead.appendChild(asrHead);

     var magHead = document.createElement("th");
     magHead.innerHTML="Maghrib";
     rowHead.appendChild(magHead);

     var isyHead = document.createElement("th");
     isyHead.innerHTML="Isha";
     rowHead.appendChild(isyHead);

     var contentRow = document.createElement("tr");

     var colTitleSubuh = document.createElement("td");
     //
     colTitleSubuh.innerHTML=times.fajr;
     contentRow.appendChild(colTitleSubuh)


     var colTitleFajr = document.createElement("td");
     colTitleFajr.innerHTML=times.sunrise
     contentRow.appendChild(colTitleFajr);

     var colValDzh = document.createElement("td");
     colValDzh.innerHTML=times.dhuhr;
     contentRow.appendChild(colValDzh);

     var colValAsh = document.createElement("td");
     colValAsh.innerHTML=times.asr;
     contentRow.appendChild(colValAsh);

     var colValMag = document.createElement("td");
     colValMag.innerHTML=times.maghrib;
     contentRow.appendChild(colValMag);

     var colValIsy = document.createElement("td");
     colValIsy.innerHTML=times.isha;
     contentRow.appendChild(colValIsy);
//
     rowHead.className = "thin large dimmed";
//
     table.appendChild(rowHead);
//
     contentRow.className = "thin large4";
     contentRow.style.color = "#b52424"; //merah bata
//
     table.appendChild(contentRow);
     wrapper.appendChild(table);

       return wrapper;
     },
 });
