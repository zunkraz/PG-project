export default function validate(newUser, setError, userData){
    let errors = {};
    let isValid = true;

    if(userData.find(user=> user.email===newUser["email"])){
      isValid = false;
      errors["email"] = "El email ya esta en uso";
    }

    if(userData.find(user=> user.username===newUser["username"])){
      isValid = false;
      errors["username"] = "El usuario ya existe";
    }

    if (typeof newUser["email"] !== undefined) {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(newUser["email"])) {
        isValid = false;
        errors["email"] = "Por favor ingresa un email válido";
      }
    }
    if (typeof newUser["name"] !== undefined && typeof newUser["lastname"] !== undefined) {
        
      var patternname = new RegExp( /^[a-zA-Z ]{2,30}$/);
      if (!patternname.test(newUser["name"])) {
        isValid = false;
        errors["name"] = "Por favor ingresa un nombre válido";
      }
      if (!patternname.test(newUser["lastname"])) {
        isValid = false;
        errors["lastname"] = "Por favor ingresa un apellido válido";
      }
    }

    if (typeof newUser["password"] !== undefined && typeof newUser["confirmPassword"] !== undefined) {
        
      if (newUser["password"] !== newUser["confirmPassword"]) {
        isValid = false;
        errors["password"] = "Las contraseñas no coinciden.";
      }
      if (newUser["password"].length<6) {
        isValid = false;
        errors["password"] = "La contraseña debe contener al menos 6 caracteres";
      }
    } 
    if (newUser["telNum1"] && typeof newUser["telNum1"] !== undefined) {
      var patternphone = new RegExp( /^[0-9]{8,30}$/);
      if (!patternphone.test(newUser["telNum1"])) {
        isValid = false;
        errors["phone"] = "Por favor ingresa un telefono válido";
      }
    }


    setError(errors)
    return isValid;
}