var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-2suyt@project-conan-95b4a.iam.gserviceaccount.com"
});
 
var db = getFirestore() ;
 
const users = [
  {
    "userId":1,
    "name": "Chanathip Buppan",
    "age": 18,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Hiroshi Agasa","Kogoro Mouri","Vermouth","Gin","Amuro Toru","Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 01", "Conan The Movie 02","Conan The Movie 03", "Conan The Movie 04","Conan The Movie 05", "Conan The Movie 06","Conan The Movie 07", "Conan The Movie 08","Conan The Movie 09", "Conan The Movie 10","Conan The Movie 11", "Conan The Movie 12","Conan The Movie 13", "Conan The Movie 14","Conan The Movie 15"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/gei.jpg?alt=media&token=4ae1f19f-7b53-40c2-8919-52d3e4054eaa",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":2,
    "name": "Jimmy Oliver",
    "age": 12,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Ran Mouri", "Shuichi Akai","Shinichi Kudo"],
    "favoriteMovies": ["Conan The Movie 07", "Conan The Movie 05"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/jim.jpg?alt=media&token=225628b1-031b-4589-8c37-a58b5fa3dfd7",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":3,
    "name": "Kasidood",
    "age": 21,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shuichi Akai", "Amuro Toru"],
    "favoriteMovies": ["Conan The Movie 01", "Conan The Movie 08"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/kasi.jpg?alt=media&token=a1056b27-9235-4960-b7da-7d60aa86a8f8",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":4,
    "name": "Nawut",
    "age": 30,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Conan Edogawa","Shuichi Akai"],
    "favoriteMovies": ["Conan The Movie 12", "Conan The Movie 07"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/per.jpg?alt=media&token=36364a67-81d1-41b3-a741-003323d25795",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":5,
    "name": "Ikarn",
    "age": 18,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Ran Mouri", "Conan Edogawa","Shuichi Akai"],
    "favoriteMovies": ["Conan The Movie 02", "Conan The Movie 05"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/karn.jpg?alt=media&token=5ff22e26-f286-460d-a903-d7f95e63bce7",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":6,
    "name": "IceJung",
    "age": 12,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 14", "Conan The Movie 15"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/icejung.jpg?alt=media&token=ce735b1e-f55e-42af-99a6-1eb6dec34e95",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":7,
    "name": "IceKung",
    "age": 8,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 03", "Conan The Movie 08"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/icekung.jpg?alt=media&token=fa4f8c9f-bf78-4941-9b54-bdf9c03dfe4f",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":8,
    "name": "OrnAon",
    "age": 30,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 01", "Conan The Movie 15"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/ao.jpg?alt=media&token=af2ffe7e-2c43-42bd-9133-43123cab578d",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":9,
    "name": "Mhee",
    "age": 28,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 10", "Conan The Movie 05"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/mhee.jpg?alt=media&token=54cc536d-9574-47b5-8229-6bea31820442",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":10,
    "name": "Dreamie",
    "age": 17,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 04", "Conan The Movie 05"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/dre.jpg?alt=media&token=bcae9d0b-6c3a-4d7e-8851-f1c72c1170dc",
    "dob": new Date("2023-12-18T00:00:00Z")
  }
]
 
users.forEach(async function(obj){
    await db.collection("users").doc(obj.userId.toString()).set(obj).then(async docRef => {
      console.log(docRef.userId+","+docRef.picture)
     })
  });
