var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-2suyt@project-conan-95b4a.iam.gserviceaccount.com"
});
 
var db = getFirestore() ;
 
const characters = [
  {
    "charaterId":1,
    "name": "Smartphone X",
    "description": "A powerful and sleek smartphone with advanced features.",
    "age": 699.99,
    "gender": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "charaterId":2,
    "firstname": "Laptop Pro",
    "description": "High-performance laptop for work and entertainment.",
    "age": 1299.99,
    "gender": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "charaterId":3,
    "firstname": "ปริษนา พ่อมดคนสุดท้ายแห่งศตวรรต",
    "description": "A stylish and comfortable sofa for your living room.",
    "age": 499.99,
    "gender": "Furniture",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "charaterId":4,
    "firstname": "Running Shoes",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "age": 89.99,
    "gender": "Sportswear",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  },
  {
    "charaterId":5,
    "firstname": "HD Smart TV",
    "description": "Immersive entertainment with high-definition smart TV.",
    "age": 899.99,
    "gender": "Electronics",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z")
  }
]
 
characters.forEach(async function(obj){
    await db.collection("characters").doc(obj.charaterId.toString()).set(obj).then(async docRef => {
      console.log(docRef.charaterId+","+docRef.picture)
     })
  });
