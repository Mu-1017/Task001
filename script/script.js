var carlender = document.getElementById("carlender");

if(carlender!==null)
{
    getCarlender(carlender);
}

function getCarlender(carlender)
{
   var date = new Date();
   var locale = "en-us";
   var month = date.toLocaleString(locale, { month: "long" });
   console.log(month);
   carlender.caption.innerHTML = month;
}
