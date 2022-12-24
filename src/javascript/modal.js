function get_cookie(cookie_name) {
   let results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

   if (results) return unescape(results[2]);
   else return null;
}

let interval = 300;
let delay_popup = 3000;

if (get_cookie('modal') == null) {
   setTimeout(function () {
      document.querySelector('.modal').style.display = 'block';
   }, 5000);

   document.querySelector('.close-button').addEventListener('click', function () {
      document.querySelector('.modal').style.display = 'none';
   });

   document.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
         document.querySelector('.modal').style.display = 'none';
      }
   });

   document.cookie = 'modal=1; domain=; max-age=' + interval;
}
