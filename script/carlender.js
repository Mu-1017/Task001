'use strict'

function Calender(year, month) {
    this.monthlabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.weeklabel = ["Su","Mo","Tu","We","Th","Fr","Sa"];
    this.yearInDisplay= year;
    this.monthInDisplay = month;
    this.daysInMonth = function (y,m) {
      return new Date(y, m, 0).getDate();
    };
    this.init = function(){
        var date = new Date();
        this.monthInDisplay = date.getMonth();
        this.yearInDisplay = date.getFullYear();
        this.getCalender();
    };
    this.previousMonth=function(){
        if(this.monthInDisplay>0)
        {
            this.monthInDisplay--;
        }
        else
        {
            this.yearInDisplay --;
            this.monthInDisplay = 11;
        }
        this.getCalender();
    };
    this.nextMonth=function(){
        if(this.monthInDisplay<11)
        {
            this.monthInDisplay++;
        }
        else
        {
            this.yearInDisplay ++;
            this.monthInDisplay = 0;
        }
        this.getCalender();
    };
    this.getCalender=function()
    {
      var year = this.yearInDisplay;
      var month = this.monthInDisplay;
        console.log(year + "  " + this.monthlabel[month]);

        var carlender = document.getElementById("calender");
        carlender.innerHTML=null;
        var table = document.createElement("table");

        var header = document.getElementById("caption");
        header.innerHTML = this.yearInDisplay + "  " +                this.monthlabel[this.monthInDisplay];

        var tr = [];
        tr[0] = document.createElement('tr');
        for(var i=0;i<7;i++)
        {
          var td = document.createElement('td');
          td.innerHTML = this.weeklabel[i];
          tr[0].appendChild(td);
        }

      table.appendChild(tr[0]);
        tr[1] = document.createElement('tr');
        var day1 = new Date(year, month, 1).getDay();
        console.log(day1);
        var days = this.daysInMonth(year, month);
        var d = 0;
        for(var i=day1;i>0;i--)
        {
          d = days-i+1;
          var td = document.createElement('td');
          td.setAttribute("class","gray-text");
          td.innerHTML = d;
          tr[1].appendChild(td);
        }

        var d1 = 1;
        for(var i=7-day1;i<=7;i++)
        {
          console.log(d1);
          var td = document.createElement('td');
          td.innerHTML = d1;
          tr[1].appendChild(td);
          d1++;
        }

        table.appendChild(tr[1]);

        carlender.appendChild(table);
        console.log(table);
    };
};

var calender = new Calender("2017", "10");
var getBtn = document.getElementById("get");
getBtn.onclick = function(){ calender.init(); };

var lastBtn = document.getElementById("last");
lastBtn.onclick = function(){
  calender.previousMonth();
};

var nextBtn = document.getElementById("next");
nextBtn.onclick = function(){ calender.nextMonth(); };
