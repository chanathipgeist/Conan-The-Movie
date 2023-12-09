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
    "name": "Smartphone X",
    "age": 699.99,
    "gender": "Electronics",
    "address": [{"country": "olivia_lee", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["john_doe", "rating"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":2,
    "name": "Laptop Pro",
    "age": 1299.99,
    "gender": "Electronics",
    "address": [{"country": "olivia_lee", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["john_doe", "rating"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":3,
    "name": "ปริษนา พ่อมดคนสุดท้ายแห่งศตวรรต",
    "age": 499.99,
    "gender": "Furniture",
    "address": [{"country": "olivia_lee", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["john_doe", "rating"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":4,
    "name": "Running Shoes",
    "age": 89.99,
    "gender": "Sportswear",
    "address": [{"country": "olivia_lee", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["john_doe", "rating"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "userId":5,
    "name": "HD Smart TV",
    "age": 899.99,
    "gender": "Electronics",
    "address": [{"country": "olivia_lee", "province": "Bangkok","pose_code":"10140"}],
    "favoriteCharacters": ["john_doe", "rating"],
    "favoriteMovies": ["john_doe", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  }
]
 
users.forEach(async function(obj){
    await db.collection("users").doc(obj.userId.toString()).set(obj).then(async docRef => {
      console.log(docRef.userId+","+docRef.picture)
     })
  });
