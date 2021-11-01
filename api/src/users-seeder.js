const User = require('./models/User');
const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://adria:cOz7DgGHSUfzLxf0@cluster0.9wurk.mongodb.net/PG-henry?retryWrites=true&w=majority');

const users = [
    new User({
         
       isAdmin: false,
       name:"Clotilde",
       lastname:"springfield",
       username:"theCloti",
       email:"clotilde_22@mail.com",
       password: "tomateypapa",
       img: "OIP.KBSiyk0OekV8CGAkZARTRQHaLH (474×711) (bing.com)",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:["617c2d73d7582578fdc7d121"],
       professionalRegistration: "55225432",
       likes: 776,
       dislikes: 560

    }),
    new User({
        isAdmin: false,
       name:"Alberto",
       lastname:"Contreras",
       username:"contrerasalb",
       email:"alberto111@gmail.com",
       password: "caracas10",
       img: "https://image.freepik.com/foto-gratis/chico-guapo-atractivo-joven-parece-encantado-contento-asombrado_295783-533.jpg",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:["617c2792d7582578fdc7d105"],
       professionalRegistration: "23445wlkdj02945klj",
       likes: 30,
       dislikes: 1

    }),
    new User({
        isAdmin: false,
       name:"Helen",
       lastname:"Chufe",
       username:"Helen_Chufe",
       email:"HelenChufe101@mail.com",
       password: "aceituna",
       img: "R.d0633a0ce4abde7936fd420d02823ee8 (720×960) (bing.com)",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:["617aad194a37a360e5d05b20"],
       professionalRegistration: "552sasd25432",
       likes: 276,
       dislikes: 50

    }),
    new User({
        isAdmin: false,
       name:"Henrique",
       lastname:"Manrique",
       username:"henrimanri",
       email:"henrique123@gmail.com",
       password: "domingosderelax",
       img: "https://image.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:["617c262ad7582578fdc7d0fa"],
       professionalRegistration: "lakjf-3029mlsa",
       likes: 2,
       dislikes: 3

    }),
    new User({
        isAdmin: false,
       name:"Daenerys",
       lastname:"Targaryen",
       username:"dragon_queen",
       email:"dany_got@gmail.com",
       password: "babydragons",
       img: "https://m.media-amazon.com/images/I/61vntPTdlOL._AC_SY741_.jpg",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:[""],
       professionalRegistration: "akf02398509mx019",
       likes: 100,
       dislikes: 0

    }),
    new User({
         
       isAdmin: false,
       name:"Romina",
       lastname:"Azucar",
       username:"Sweet_Romi",
       email:"romina_azucar@mail.com",
       password: "cafecafe22",
       img: "R.d0633a0ce4abde7936fd420d02823ee8 (720×960) (bing.com)",
       isProfessional: true,
       appointments: [],
       schedule: [],
       category:["617aad194a37a360e5d05b20"],
       professionalRegistration: "552sasd25432",
       likes: 276,
       dislikes: 50

    }),
    new User({
        isAdmin: false,
        name:"Harry",
        lastname:"Potter",
        username:"harrypotter2000",
        email:"harrypotter@gmail.com",
        password: "voldemort",
        img: "https://www.elindependiente.com/wp-content/uploads/2019/07/IMG_3083.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c27b2d7582578fdc7d107"],
        professionalRegistration: "kljasf0932knr320",
        likes: 48,
        dislikes: 1

    }),
    new User({
        isAdmin: false,
        name:"Elmo",
        lastname:"Struli",
        username:"elmo_struli",
        email:"elmaestruli@mail.com",
        password: "jojojojo",
        img: "f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg (400×400) (twimg.com)",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2792d7582578fdc7d105"],
        professionalRegistration: "552sasaa21234d25432",
        likes: 976,
        dislikes: 30

    }),
    new User({
        isAdmin: false,
        name:"Veronica",
        lastname:"Reyes",
        username:"VeroQueen77",
        email:"veroqueen77@tomate.com",
        password: "berenjena123456",
        img: "OIP.rk5c35R3ln0CI_20or04XAHaEK (474×266) (bing.com)",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2669d7582578fdc7d0fc"],
        professionalRegistration: "vero12345cantabcde",
        likes: 1976,
        dislikes: 240

    }),
    new User({
        isAdmin: false,
        name:"Julia",
        lastname:"Hernandez",
        username:"julihernandez",
        email:"jhernandez@mail.com",
        password: "1",
        img: "https://media.istockphoto.com/photos/smiling-female-entrepreneur-with-laptop-in-a-meeting-room-picture-id1271215144?b=1&k=20&m=1271215144&s=170667a&w=0&h=6SjZYeMwZGPA9C7ifZJHujoZp4xHMYtY3wH4GDzj3cg=",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aa0cdcd1fa1ebd069ff21"],
        professionalRegistration: "A123",
        likes: 35,
        dislikes: 2

    }),
    new User({
        isAdmin: false,
        name:"Juan",
        lastname:"Hernandez",
        username:"juhernandez",
        email:"juanH@mail.com",
        password: "2",
        img: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/11/Here%E2%80%99s-the-Top-Downtime-Habits-of-Successful-Business-People-1024x705.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aa0cdcd1fa1ebd069ff21"],
        professionalRegistration: "A456",
        likes: 75,
        dislikes: 8

    }),
    new User({
        isAdmin: false,
        name:"Juan",
        lastname:"Hernandez",
        username:"juhernandez",
        email:"juanH@mail.com",
        password: "2",
        img: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/11/Here%E2%80%99s-the-Top-Downtime-Habits-of-Successful-Business-People-1024x705.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aa0cdcd1fa1ebd069ff21"],
        professionalRegistration: "A456",
        likes: 75,
        dislikes: 8

    }),
    new User({
        isAdmin: false,
        name:"Juana",
        lastname:"Hernandez",
        username:"juanihernandez",
        email:"juanita@mail.com",
        password: "3",
        img: "https://blog.hubspot.com/hubfs/local-business-directory.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2c05d7582578fdc7d11c"],
        professionalRegistration: "D123",
        likes: 85,
        dislikes: 28

    }),
    new User({
        isAdmin: false,
        name:"Andrea",
        lastname:"Rodriguez",
        username:"arodriguez",
        email:"andy@mail.com",
        password: "4",
        img: "https://ugc.futurelearn.com/uploads/images/59/35/header_59359d44-f391-4258-a82d-d9d549390980.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aad194a37a360e5d05b20"],
        professionalRegistration: "V123",
        likes: 71,
        dislikes: 48

    }),
    new User({
        isAdmin: false,
        name:"Jose",
        lastname:"Herrera",
        username:"usernotfount",
        email:"user@mail.com",
        password: "000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4N7NgKsHQtl5E1_GxU5g5NiL3UQgmna5HSQVUlZMciP11lywqSRdkflfU9O9n3knC0k&usqp=CAU",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2d73d7582578fdc7d121"],
        professionalRegistration: "E123",
        likes: 25,
        dislikes: 49

    }),
    new User({
        isAdmin: false,
        name:"Andrea",
        lastname:"Torres",
        username:"atorres",
        email:"andres.torres@yimail.com",
        password: "123456",
        img: "https://media.istockphoto.com/photos/young-architect-holding-hardhat-and-blue-print-picture-id1056631228?k=20&m=1056631228&s=612x612&w=0&h=2GmoCANphj0w9XPUVo1fH78PD_NE3ba6s99wMImMXqY=",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aac19eb91de09883ede8e"],
        professionalRegistration: "GHT1880",
        likes: 19,
        dislikes: 3

    }),
    new User({
        isAdmin: false,
        name:"Jorge",
        lastname:"Diaz",
        username:"jorgediaz",
        email:"jorge.diaz@yimail.com",
        password: "123456",
        img: "https://media.istockphoto.com/photos/handsome-and-successful-picture-id523147175?k=20&m=523147175&s=612x612&w=0&h=alYL01HpCXTxmvAcla6I32hlcycDH86N5NkyJSe-VtU=",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aa0cdcd1fa1ebd069ff21"],
        professionalRegistration: "CQR6980",
        likes: 48,
        dislikes: 12

    }),
    new User({
        isAdmin: false,
    name:"Laura",
    lastname:"Santofimio",
    username:"laurasanto",
    email:"laura.santofimio@yimail.com",
    password: "123456",
    img: "https://media.istockphoto.com/photos/confident-businesswoman-in-smart-casual-wear-standing-against-grey-picture-id1202584705?k=20&m=1202584705&s=612x612&w=0&h=RUwQ51I1TAYosVUY3WJMhTVFxqWiuLgTJM0feTFvsp4=",
    isProfessional: true,
    appointments: [],
    schedule: [],
    category:["617c262ad7582578fdc7d0fa"],
    professionalRegistration: "MNN1266",
    likes: 19,
    dislikes: 3

    }),
    new User({
        isAdmin: false,
    name:"Sofia",
    lastname:"Arizmendi",
    username:"Sofiari",
    email:"sofia.arizmendi@yimail.com",
    password: "123456",
    img: "https://media.istockphoto.com/photos/my-career-makes-me-happy-picture-id467792306?k=20&m=467792306&s=612x612&w=0&h=tsff1OiTfju1a7EUzvdl2oGgITUk4KxZ5srbLGtcmvM=",
    isProfessional: true,
    appointments: [],
    schedule: [],
    category:["617c27b2d7582578fdc7d107"],
    professionalRegistration: "LGH4677",
    likes: 37,
    dislikes: 11

    }),
    new User({
        isAdmin: false,
        name:"Patricia",
        lastname:"Lebsack",
        username:"Karianne",
        email:"Julianne.OConner@kory.org",
        password: "111111",
        img: "https://thronesapi.com/assets/images/daenerys.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2c05d7582578fdc7d11c"],
        professionalRegistration: "004",
        likes: 4,
        dislikes: 0
    }),
    new User({
        isAdmin: false,
        name:"Carolina",
        lastname:"Arango",
        username:"Caroarando",
        email:"caro.arango@yimail.com",
        password: "123456",
        img: "https://media.istockphoto.com/photos/this-makes-doing-business-so-easy-picture-id522738274?k=20&m=522738274&s=612x612&w=0&h=Dhk18nFJ2V_JaHbwZeoTrb4Os9gSJwVZm9BIGZzRmVw=",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c2c05d7582578fdc7d11c"],
        professionalRegistration: "PTP7854",
        likes: 37,
        dislikes: 11

    }),
    
    new User({
        isAdmin: false,
        name:"Clementine",
        lastname:"Bauch",
        username:"Samantha",
        email:"Nathan@yesenia.net",
        password: "111111",
        img: "https://thronesapi.com/assets/images/cersei.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aa0cdcd1fa1ebd069ff21"],
        professionalRegistration: "003",
        likes: 7,
        dislikes: 1
    }),
    new User({
        isAdmin: false,
        name:"Ervin",
        lastname:"Howell",
        username:"Antonette",
        email:"Shanna@melissa.tv",
        password: "111111",
        img: "https://thronesapi.com/assets/images/jon-snow.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c27b2d7582578fdc7d107"],
        professionalRegistration: "001",
        likes: 6,
        dislikes: 2
    }),
    new User({
        isAdmin: false,
        name: "Leanne ",
        lastname:"Graham", 
        username: "Bret",
        email: "Sincere@april.biz",
        password: "111111",
        img: "https://thronesapi.com/assets/images/arya-stark.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617c262ad7582578fdc7d0fa"],
        professionalRegistration: "002",
        likes: 3,
        dislikes: 0
    }),
    new User({
        isAdmin: false,
        name:"Carlos",
        lastname:"Terrabussi",
        username:"carlost",
        email:"carlos_terra@mail.com",
        password: "111111",
        img: "https://thronesapi.com/assets/images/tyrion-lannister.jpg",
        isProfessional: true,
        appointments: [],
        schedule: [],
        category:["617aac19eb91de09883ede8e"],
        professionalRegistration: "000",
        likes: 5,
        dislikes: 0
    }),
];
async function seed(users) {
    var done = 0;
    for(let i = 0; i < users.length; i++) {
        users[i].password = await hashu(users[i].password);
        users[i].save(function(err, result){
            done++;
            if(done === users.length) {
                console.log(err);
                console.log(result);
                exit();
            }
        });
    }
}
seed(users);
function exit(){
    mongoose.disconnect();
}

async function hashu(pass) {
    const hashedPassword = await bcrypt.hash(pass, 10);
    return hashedPassword;
}