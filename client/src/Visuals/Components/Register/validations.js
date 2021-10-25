const fakeusers=[{
  username: "amigo",
  email: "sad@sad.com",
  password:"1234"
},
{
  username: "carlos",
  email: "bilardo@sad.com",
  password:"12346"
}
]


export default function validate(newUser, setError){
    let errors = {};
    let isValid = true;

    if (fakeusers.find(user=>user.username===newUser["username"])) {
      isValid = false;
      errors["username"] = "El nombre de usuario ya existe";
    }

    if (fakeusers.find(user=>user.email===newUser["email"])) {
      isValid = false;
      errors["email"] = "El correo electronico ya esta registrado";
    }

    if (typeof newUser["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(newUser["email"])) {
        isValid = false;
        errors["email"] = "Por favor ingresa un email válido";
      }
    }

    if (typeof newUser["password"] !== undefined && typeof newUser["confirmPassword"] !== undefined) {
        
      if (newUser["password"] !== newUser["confirmPassword"]) {
        isValid = false;
        errors["password"] = "Las contraseñas no coinciden.";
      }
    } 

    setError(errors)
    return isValid;
}