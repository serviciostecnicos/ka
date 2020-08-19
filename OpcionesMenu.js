/*
                            var parrafo = document.createElement('div');
                            var contenido = document.createTextNode('Hola a todos');
                            parrafo.appendChild(contenido);
                            document.getElementById('bloque1').appendChild(contenido);
                            document.getElementById('bloque1').removeChild(contenido);*/



document.getElementById('parrafo2bloque1').style.display='';
document.getElementById('parrafobloque1').style.display='none';

document.getElementById('parrafo2bloque2').style.display='';
document.getElementById('parrafobloque2').style.display='none';

document.getElementById('parrafo2bloque3').style.display='';
document.getElementById('parrafobloque3').style.display='none';

document.getElementById('parrafo2bloque4').style.display='';
document.getElementById('parrafobloque4').style.display='none';



var uno = document.getElementById("bloque1");
    uno.addEventListener("click",function(){
        document.getElementById("bloque1").style.width = '100%';
            document.getElementById("bloque1").style.height = '150px';
                document.getElementById('bloque2').style.display='none';
                    document.getElementById('parrafobloque1').style.display='';
                        document.getElementById('parrafo2bloque1').style.display='none';
                            document.getElementById('parrafobloque1').style.color='white';

    }
);

    uno.addEventListener('mouseout',function(){
      document.getElementById("bloque1").style.width = '40%';
          document.getElementById("bloque1").style.height = '100px';
            document.getElementById('bloque2').style.display='';
                document.getElementById('parrafobloque1').style.display='none';
                    document.getElementById('parrafo2bloque1').style.display='';

})

var dos = document.getElementById("bloque2");
    dos.addEventListener("click",function(){
        document.getElementById("bloque2").style.width = '100%';
            document.getElementById("bloque2").style.height = '150px';
              document.getElementById('bloque1').style.display='none';
                document.getElementById('parrafo2bloque2').style.display='none';
                  document.getElementById('parrafobloque2').style.display='';
                    document.getElementById('parrafobloque2').style.color='white';

    }
);

    dos.addEventListener('mouseout',function(){
      document.getElementById("bloque2").style.width = '40%';
          document.getElementById("bloque2").style.height = '100px';
            document.getElementById('bloque1').style.display='';
              document.getElementById('parrafobloque2').style.display='none';
                document.getElementById('parrafo2bloque2').style.display='';

    }
);


var tres = document.getElementById("bloque3");
    tres.addEventListener("click",function(){
        document.getElementById("bloque3").style.width = '100%';
          document.getElementById("bloque3").style.height = '150px';
            document.getElementById('bloque4').style.display='none';
              document.getElementById('parrafo2bloque3').style.display='none';
                document.getElementById('parrafobloque3').style.display='';
                  document.getElementById('parrafobloque3').style.color='white';
    }
);

    tres.addEventListener('mouseout',function(){
      document.getElementById("bloque3").style.width = '40%';
          document.getElementById("bloque3").style.height = '100px';
            document.getElementById('bloque4').style.display='';
              document.getElementById('parrafobloque3').style.display='none';
                document.getElementById('parrafo2bloque3').style.display='';

    }
);



var cuatro = document.getElementById("bloque4");
    cuatro.addEventListener("click",function(){
        document.getElementById("bloque4").style.width = '100%';
            document.getElementById("bloque4").style.height = '150px';
                document.getElementById('bloque3').style.display='none';
                  document.getElementById('parrafo2bloque4').style.display='none';
                    document.getElementById('parrafobloque4').style.display='';
                      document.getElementById('parrafobloque4').style.color='black';

    }
);

    cuatro.addEventListener('mouseout',function(){
      document.getElementById("bloque4").style.width = '40%';
          document.getElementById("bloque4").style.height = '100px';
            document.getElementById('bloque3').style.display='';
              document.getElementById('parrafobloque4').style.display='none';
                document.getElementById('parrafo2bloque4').style.display='';

    }
);
