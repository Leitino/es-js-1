var mail = prompt ('inserisci mail');
var lista =['alebiagini@gmail.com', 'alelausdei@gmail.com', 'aleleita@gmail.com'];
var controllo = lista.includes(mail);
if (controllo==true) {
  alert('mail accettata')
}
else {
  alert('mail non accettata')
}
