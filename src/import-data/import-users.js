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
    "favoriteCharacters": ["Shinichi Kudo", "Conan Edogawa"],
    "favoriteMovies": ["Conan The Movie 1", "Conan The Movie 5"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":2,
    "name": "Jimmy Oliver",
    "age": 12,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Ran Mouri", "Shuichi Akai","Shinichi Kudo"],
    "favoriteMovies": ["Conan The Movie 7", "Conan The Movie 5"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":3,
    "name": "Kasidood",
    "age": 21,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Shuichi Akai", "Amuro Toru"],
    "favoriteMovies": ["Conan The Movie 1", "Conan The Movie 8"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":4,
    "name": "Nawut",
    "age": 30,
    "gender": "Male",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Conan Edogawa","Shuichi Akai"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":5,
    "name": "Ikarn",
    "age": 18,
    "gender": "Female",
    "address": [{"country": "Thailand", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["Ran Mouri", "Conan Edogawa","Shuichi Akai"],
    "favoriteMovies": ["Conan The Movie 2", "Conan The Movie 5"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  }
]
 
users.forEach(async function(obj){
    await db.collection("users").doc(obj.userId.toString()).set(obj).then(async docRef => {
      console.log(docRef.userId+","+docRef.picture)
     })
  });
