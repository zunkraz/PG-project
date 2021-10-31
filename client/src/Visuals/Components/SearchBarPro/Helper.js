export function Filter(obj,arr){
    const {name,profesion, country, min,max, likes} = obj
    
    //Primero filtramos por nombre
    //hay que colocar la regex para los acentos
    if(name){
        let arrOne = name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1));
        let firstName = arrOne[0];
        if(arrOne[1]){
            let lastName = arrOne[1];
            arr = (arr.filter(e => e.name === firstName)).filter(e => e.lastname === lastName);
        }else{
            arr = arr.filter(e => e.name === firstName)
        }
       
        
    }
    if(profesion){
        arr = arr.filter(e => e.category[0].name === profesion);
    }
    if(country){
        arr = arr.filter(e => e.country === country);
    }
    //Likes Funciona colocar valor de regla
    if(likes){
        let val = 7;
        switch (likes) {
            case 'Iniciado':
               
                arr = arr.filter(e => e.likes < val)
                break;
            case 'Intermedio':
                
                arr = arr.filter(e => e.likes > val && e.likes < Math.pow(val,2));
                break;
            case 'Popular':
              
                arr = arr.filter(e => e.likes > Math.pow(val,2));
                break;
            default:
                break;
        }
    }
    if(min && max){
        console.log(200)
    }
        
     return arr
}