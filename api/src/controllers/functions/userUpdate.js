//admin function
const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = (username,updateInfo) => {
  if(updateInfo.password.length){
    return bcrypt.hash(updateInfo.password,10).then(r=>{
      updateInfo.password=r
      return User.findOneAndUpdate({username},{
        $set: updateInfo
      }, {new: true}).select({username:1, email:1});
    })
  }
  return User.findOneAndUpdate({username},{
    $set: updateInfo
  }, {new: true}).select({username:1, email:1}); //el select es por si queremos que la funcion
}                                                   // devuelva el username y el email del usuario actualizado
                                                    // y el {new: true} que esta en varias funciones es por si
                                                    //quiero que me devuelva el resultado del update
