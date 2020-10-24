function validacion(){
  
    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("contrasenia");

 
 
    // SI el usuario no tiene @, esta vacio o la contraseña esta vacia, tira un alert
    if(usuario.value.includes("@") != true && usuario.value === "" && contrasenia.value === "") {
        alert(`Los datos no pueden estar vacios`); 
        return false;
    }
    
      else {

       
      
    // si el usuario esta vacio o no tiene el @
    if(usuario.value === "" || usuario.value.includes("@") != true  ) {
                      
        if (usuario.value === "" ){
                      alert(`El usuario no puede estar vacío`); 
                          return false;            
                                       }
                     else{

                             if (usuario.value.includes("@") != true) {
                                alert(`El usuario debe contener un @`);         
                                  return false;   
                                   }
                       
                       
                      else{
                     alert(`Ingreso Exitoso`);   
                      return true;     
                     } 
                    }

                }


    //si la contraseña esta vacia 

    if( contrasenia.value === ""){
         alert(`La contraseña no puede estar vacía`); 
            return false;            
        }
              
    else{
        alert(`Ingreso Exitoso`);   
        return true;     
    } 
      }

    }

   