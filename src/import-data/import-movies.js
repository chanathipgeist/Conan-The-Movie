var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-2suyt@project-conan-95b4a.iam.gserviceaccount.com"
});
 
var db = getFirestore() ;
 
const movies = [
  {
    "movieId":1,
    "name": "Smartphone X",
    "description": "A powerful and sleek smartphone with advanced features.",
    "stars": 699.99,
    "category": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["john_doe", "rating"]
  },
  {
    "movieId":2,
    "name": "Laptop Pro",
    "description": "High-performance laptop for work and entertainment.",
    "stars": 1299.99,
    "category": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["john_doe", "rating"]
  },
  {
    "movieId":3,
    "name": "ปริษนา พ่อมดคนสุดท้ายแห่งศตวรรต",
    "description": "A stylish and comfortable sofa for your living room.",
    "stars": 499.99,
    "category": "Furniture",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["john_doe", "rating"]
  },
  {
    "movieId":4,
    "name": "Running Shoes",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "stars": 89.99,
    "category": "Sportswear",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters":  ["john_doe", "rating"]
  },
  {
    "movieId":5,
    "name": "HD Smart TV",
    "description": "Immersive entertainment with high-definition smart TV.",
    "stars": 899.99,
    "category": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["john_doe", "rating"]
  }
]
 
movies.forEach(async function(obj){
    await db.collection("movies").doc(obj.movieId.toString()).set(obj).then(async docRef => {
      console.log(docRef.movieId+","+docRef.picture)
     })
  });
