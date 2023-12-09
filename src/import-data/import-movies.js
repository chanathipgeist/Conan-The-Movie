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
    "name": "Conan The Movie 1",
    "description": "A powerful and sleek smartphone with advanced features.",
    "stars":7.5,
    "category": ["drama", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["Shinichi Kudo","Ran Mouri"],
    "totalCharacter": 2,
    "view": 3029540
  },
  {
    "movieId":2,
    "name": "Conan The Movie 2",
    "description": "High-performance laptop for work and entertainment.",
    "stars": 5.5,
    "category": ["drama", "rating"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": [ "Shinichi Kudo", "rating"],
    "totalCharacter": 2,
    "view": 2009856
  },
  {
    "movieId":3,
    "name": "Conan The Movie 3",
    "description": "A stylish and comfortable sofa for your living room.",
    "stars": 10,
    "category": ["thriller", "scare"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": ["Shinichi Kudo","Ran Mouri"],
    "totalCharacter": 2,
    "view": 5236841
  },
  {
    "movieId":4,
    "name": "Conan The Movie 4",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "stars": 4.2,
    "category": ["fun", "scare"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters":  ["Shuichi Akai","Shinichi Kudo","Ran Mouri"],
    "totalCharacter": 3,
    "view": 3648521
  },
  {
    "movieId":5,
    "name": "Conan The Movie 5",
    "description": "Immersive entertainment with high-definition smart TV.",
    "stars": 8,
    "category":["drama", "fun"],
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "release_date": new Date("2023-12-18T00:00:00Z"),
    "charaters": [ "Shinichi Kudo","Ran Mouri","Amuro Toru"],
    "totalCharacter": 3,
    "view": 3698651
  }
]
 
movies.forEach(async function(obj){
    await db.collection("movies").doc(obj.movieId.toString()).set(obj).then(async docRef => {
      console.log(docRef.movieId+","+docRef.picture)
     })
  });
