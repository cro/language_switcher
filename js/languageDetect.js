var userLang = navigator.language || navigator.userLanguage;
alert(userLang);
if (localStorage.getItem("myLang") === null) {
  alert("no local");
  switch(userLang){
    case 'en-US':
      window.location.href = '../en-us/home.html';
      break;
    case 'es-ES':
      window.location.href = '../es/home.html';
      break;
    case 'fr-FR':
      window.location.href = '../fr/home.html';
      break;
    case 'ja-JP':
      window.location.href = '../ja/home.html';
      break;
    default:
      window.location.href = '../en-us/home.html';
      break;
  }
}

//var myLang;
$( document ).ready(function() {
  $( "select" ).change(function() {
    //myLang = $(this).val();
    localStorage.setItem('myLang', $(this).val());
    window.location.href = '../examples/' + $(this).val() + '/home.html';
  });
});
