var Device_check =()=>{
if(  /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)){
    return "Mobile"
}else{

return "PC"

}


}
function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 


var getOS = ()=> {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = "unknown OS (Operating System)";
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

  var isEnabled = ()=>{
var cookie ="Sorry an Error occured cant tell your cookie is enabled or not"  
    if(navigator.cookieEnabled){
cookie="Enabled"


    }else{

        cookie = 'Disabled'

    }
    return cookie
}

fetch(`https://ipinfo.io/json?token=ea4fde52d6eacd`).then(
    res=>res.json() ).then(data=>{

        //variables starts
var container = document.getElementById("container")
var loading = document.getElementById('spinner')
var IP = document.getElementById("IP")
var ISP = document.getElementById("ISP")
var location = document.getElementById("location")
var DT=document.getElementById("Device-Type")
var OS = document.getElementById("OS")
var SR = document.getElementById("SR")
var Bname = document.getElementById("B-Name")
var cookie = document.getElementById("isEnabled")
//varible ends
Bname.innerText=detectBrowser()
cookie.innerText=isEnabled()
OS.innerText= getOS()
SR.innerText=screen.width +" X " + screen.height
DT.innerText=Device_check()
ISP.innerText=data.org
IP.innerText = data.ip
location.innerText=data.city + ' city, ' + data.country
loading.style.display='none'
container.style.display='block'
        console.log(data)

    }).catch(e=>console.error(e))
   