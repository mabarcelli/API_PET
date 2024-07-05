

const mascotas = [
    {
        "id" : 1,
        "nombre" : "jupiter",
        "tipo" : "perro",
        "raza" : "pastor aleman",
        "img" : "https://www.hundeo.com/wp-content/uploads/2019/06/Deutscher-Scha%CC%88ferhund-Profil.jpg.webp"
    },
    {
        "id" : 2,
        "nombre" : "princesa",
        "tipo" : "perro",
        "raza" : "pit bull",
        "img": "https://ultimatebarkcontrol.com/cdn/shop/articles/brown-pitbull.jpg?v=1701282417"

    },
    {
        "id" : 3,
        "nombre" : "azula",
        "tipo" : "gato",
        "raza" : "gato siames",
        "img": "https://blog.felinus.cl/wp-content/uploads/2022/01/gato-siames-4.png"

    },
    {
        "id" : 4,
        "nombre" : "Alfredo",
        "tipo" : "perro",
        "raza" : "poodle",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVJapTqgX4iNuDo55yEIOzTXWPoZOxiRvBA&s"

    },
    {
        "id" : 5,
        "nombre" : "tacita",
        "tipo" : "gato",
        "raza" : "ragdoll",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrOOcsiZlcwWOp171X0QA7ANX9syql8dglg&s"

    },
    {
        "id" : 6,
        "nombre" : "Negro",
        "tipo" : "perro",
        "raza" : "gran danes",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-koMPxvOVaPVwNJXrbHSxpUI3EfBC5nDpQ&s"

    },
    {
        "id" : 7,
        "nombre" : "blanquita",
        "tipo" : "gato",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-SGDEYRyUbUFmCZ8tvCS63J2Ghk7QR2z6A&s"

    },
    {
        "id" : 8,
        "nombre" : "Aquiles",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/02/14/6209b423341cb.jpeg"

    },
    {
        "id" : 9,
        "nombre" : "perro",
        "tipo" : "gato",
        "raza" : "ragdoll",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwts7ZzhccQAASobxoi9P9cc9shqW3xdIRw&s"

    },
    {
        "id" : 10,
        "nombre" : "gato",
        "tipo" : "perro",
        "raza" : "caniche",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfg_RGV7X80zKHNvhuDWNsS5Px-Am2siNKg&s"

    },
    {
        "id" : 11,
        "nombre" : "Luna",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnipCIC0Yc7GD-G5CejGetLL85jEW8BwaTKQ&s"

    },
    {
        "id" : 12,
        "nombre" : "Luis Fonsi",
        "tipo" : "perro",
        "raza" : "Pequines",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE8OX93khyB8kLMy_XCx7temqRlJzO78_4Q&s"

    },
    {
        "id" : 13,
        "nombre" : "Reina",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2prNPaZzprnWQTqoSCa7Bffa7bAGR3tJ1A&s"

    },
    {
        "id" : 14,
        "nombre" : "marte",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEU3CpxeNULoAKQ52YFJ-grg0caQPuIuf2w&s"

    },
    {
        "id" : 15,
        "nombre" : "Destructor",
        "tipo" : "perro",
        "raza" : "Rottweiler",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZH8XgQC8d4sFBTy0rOmrrySurWKN3Hujj9w&s"

    },
    {
        "id" : 16,
        "nombre" : "tren",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBl5DlN7ryiBeGVsKhyoWRgVoCRMJdcmb-pw&s"

    },
    {
        "id" : 17,
        "nombre" : "Megan",
        "tipo" : "gato",
        "raza" : "ragdoll",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsJ6mI-_KpCJOELTcxhl0wxsfPDrGARpeWw&s"

    },
    {
        "id" : 18,
        "nombre" : "Galleta",
        "tipo" : "gato",
        "raza" : "ragdoll",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-k1VlpguBh0Z3S2-wKxDvsVzgoy-4CVahg&s"

    },
    {
        "id" : 19,
        "nombre" : "Violeta",
        "tipo" : "perro",
        "raza" : "pastor aleman",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3isepVucb3jiHO1ICb-sdtvbHrvR9TJcTA&s"

    },
    {
        "id" : 20,
        "nombre" : "chisito",
        "tipo" : "perro",
        "raza" : "caniche",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRkjGVew398bKkGDCfUSSb1Ied-YiBAwqsA&s"

    },
    {
        "id" : 21,
        "nombre" : "limon",
        "tipo" : "gato",
        "raza" : "shorthair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe92v_jXUjyvjvpzZWdhFKwQlGGr08zFw5gA&s"

    },
    {
        "id" : 22,
        "nombre" : "limonada",
        "tipo" : "perro",
        "raza" : "caniche",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZvleXT72g47-pn20wbzUMyD_oxmMR_GC5A&s"

    },
    {
        "id" :23, 
        "nombre" : "Hozier",
        "tipo" : "gato",
        "raza" : "persa",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OgjmJUrGCVJF1WnjVZiwwfr1dEAVFbuf3Q&s"

    },
    {
        "id" :24, 
        "nombre" : "Helio",
        "tipo" : "gato",
        "raza" : "persa",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyBMPcGAZMyggXDMHFhnfufoRCIKxEJtUhg&s"

    },
    {
        "id" : 25,
        "nombre" : "Perfume",
        "tipo" : "perro",
        "raza" : "salchicha",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMmODKhUW8a2TFGI-4KPbAHzmb5gdbwNW1A&s"

    },
    {
        "id" : 26,
        "nombre" : "siete",
        "tipo" : "gato",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cuIHffwtToRglQgU31pW4P2LUdKR2lR6uA&s"

    },
    {
        "id" : 27,
        "nombre" : "bolt",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAPvjv_z7RTgRT9pNdBhoPjqq3KyGqz77Hg&s"

    },
    {
        "id" : 28,
        "nombre" : "Lunita",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E6836ix4VvlRdQxCIuuFs3gjlzS1N66jfg&s"

    },
    {
        "id" : 29,
        "nombre" : "Ariana",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1T0Of1Eq-0ET-wR9T3lW9A-edXFOscw5KMQ&s"

    },
    {
        "id" : 30,
        "nombre" : "Kilo",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfBvhZ-gEhU3m5KCF0ErROesIFd9AKE7jVw&s"

    },
    {
        "id" : 31,
        "nombre" : "Luis boton",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqH3fUg8DTsZT4ybgJL4y-xBHwJrgw26YrmA&s"

    },
    {
        "id" : 32,
        "nombre" : "Laika",
        "tipo" : "perro",
        "raza" : "chihuahua",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tvInXOsZpfQp4Wjjt2_LUkclN9nAJwqWCw&s"

    },
    {
        "id" : 33,
        "nombre" : "Anselmo",
        "tipo" : "gato",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeNXxVSr6e0C5y9L4Sy5Y_Jj4i2jth3rbdw&s"

    },
    {
        "id" : 34,
        "nombre" : "Fresa",
        "tipo" : "perro",
        "raza" : "pit bull",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqXw2yhuCp6IE311a3EBm_4oxloYTUB-CRA&s"

    },
    {
        "id" : 35,
        "nombre" : "Roger Waters",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTfJ-zpB-KkQlh_jcJpMs_dvld2sPFRK_Ew&s"

    },
    {
        "id" : 36,
        "nombre" : "Hueso",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4exVxfVLOYN90xmH8uc9I3Yhvy2ahEgigQ&s"

    },
    {
        "id" : 37,
        "nombre" : "frances",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZILQ9obna01S96T_aGnd1mIoNvXgMiatlDA&s"

    },
    {
        "id" : 38,
        "nombre" : "cerecita",
        "tipo" : "perro",
        "raza" : "pit bull",
        "img": "https://i.pinimg.com/originals/7c/1d/9a/7c1d9a50cc290894982f602853606d41.jpg"

    },
    {
        "id" : 39,
        "nombre" : "Ariel",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDPIZRTwXTtGhr_2-CvOrdWozen5dks-S-Q&s"

    },
    {
        "id" : 40,
        "nombre" : "Frutillita",
        "tipo" : "perro",
        "raza" : "pit bull",
        "img": "https://i.pinimg.com/736x/62/9e/97/629e977c7d3cfa41112785f8bba3097d.jpg"

    },
    {
        "id" : 41,
        "nombre" : "Charlie",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8WQJCBHiM79JuJ1eUHcvXudI7rrThjnyyw&s"

    },
    {
        "id" : 42,
        "nombre" : " telefono",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjj-xo-aDZEPUDYQ6ZL3MeFhfcHTVRwwiUA&s"

    },
    {
        "id" : 43,
        "nombre" : "cangrejo",
        "tipo" : "gato",
        "raza" : "short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLebisHfLkjeiU8omx08K7jXhGXO8lSO7Xw&s"

    },
    {
        "id" : 44,
        "nombre" : "Lysenko",
        "tipo" : "gato",
        "raza" : "gato esfinge",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLAeGo0PJ2RXAUb3-QOfSunLP25SK7dkFuw&s"

    },
    {
        "id" : 45,
        "nombre" : "Stalin",
        "tipo" : "gato",
        "raza" : "Scottish Fold",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VkcxPCohs7PfW0HrTie6ge48jJ-KQ_WX1A&s"

    },
    {
        "id" : 46,
        "nombre" : "Tito",
        "tipo" : "perro",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03WxcKmPzkqK6yYgxBDZ4phMpOFmOMNo3UA&s"

    },
    {
        "id" : 47,
        "nombre" : "Pol pot",
        "tipo" : "perro",
        "raza" : "pit bull",
        "img": "https://i.pinimg.com/564x/fd/9d/03/fd9d03c1515a71feebc36fe5bec281b2.jpg"

    },
    {
        "id" : 48,
        "nombre" : "Pavelic",
        "tipo" : "gato",
        "raza" : " oriental short hair",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNhiyrnCNHv5_oQZnJWo9c-XKreXcv-TS_g&s"

    },
    {
        "id" : 49,
        "nombre" : "Che",
        "tipo" : "gato",
        "raza" : "mestizo",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwBv8x2tS2DqUN0gEMnMb5FZFnrBk5IAYQQ&s"

    }

];

module.exports = {
    mascotas
}