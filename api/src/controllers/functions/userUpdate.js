//admin function
const User = require('../../models/User');

module.exports = (username,updateInfo) => {
  return User.findOneAndUpdate({username},{
    $set: updateInfo
  }, {new: true}).select({username:1, email:1}); //el select es por si queremos que la funcion
}                                                   // devuelva el username y el email del usuario actualizado
                                                    // y el {new: true} que esta en varias funciones es por si
                                                    //quiero que me devuelva el resultado del update
