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
    "name": "Shinichi Kudo",
    "description": "Shinichi Kudo, also known as the 'modern sherlock holmes', is the protagonist of the story. Shinichi is very skilled in soccer and is also very smart. His intelligence comes from his parents who are very wealthy and are both famous actors and mystery writers. Shinichi has a huge passion of reading novels (especially mysteries). Even though Shinichi can be considered intelligent, when it comes to relationships with friends, he's pretty much clueless. He has a hard time understanding one's feelings, and understanding what they are going through. Shinichi is often very imperious, or arrogant. He likes to get attention and show himself off as a 'great detective'. There are times where Shinichi can be quite shrewd and stubborn, but deep down, he really cares for those close to him. He was shrunken to the body of a child by a mysterious black organization. He has a crush on Ran Mouri, whom is his childhood sweetheart. He doesn't show his feelings for Ran and tries to hide them. He did confessed his feelings to Ran while in London, (see episode 618.) however he still makes attempts to avoid them being called a couple by hiding his feelings. His role models are Sherlock Holmes, and Sir Arthur Conan Doyle, whom are both his inspiration to become a detective. He claims that he only joined the soccer team so he can become a better detective. (see episode 1.) He enjoys playing soccer, reading mystery novels, and solving cases. ",
    "age": 17,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Kudo.jpg?alt=media&token=41618d79-937e-4f59-a941-e5d8111c13f6",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":2,
    "name": "Conan Edogawa",
    "description": "Conan Edogawa is the alternative version of Shinichi Kudo. He's the main protagonist of the story. His real name is Shinichi Kudo, highschool detective. However, he hides his identity from others and goes by the name 'Conan Edogawa', a kid who attends Teitan Elementary. However, some know of his identity, and keep it a secret from others. He loves to act cute in front of adults to get their attention, especially during a case. Even though he's the size of a kid, he still has his intellect and the mind of an adult. Even though he can appear quite carefree and chappy around adults and those older than him, Conan's personality is the same as when he's Shinichi. He can be a bit stubborn and calculating when he doesn't get his way, and often has a short temper. He watches over Ran, and makes sure she's okay. While Ran takes care of him and sees Conan as a little brother. His relationship with Ran as Conan is more seen as a close brother and sister relationship. Conan is treated as a separate character from Shinichi among fans. He enjoys playing soccer, solving cases, reading mystery novels and manga, and spending time with Ran.",
    "age": 6,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Edogawa.jpg?alt=media&token=34b2d14f-be30-47f9-9f3f-055167945cfa",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":3,
    "name": "Ran Mouri",
    "description": "Ran Mouri is Shinichi Kudo's childhood sweetheart. She is one of the main protagonists in the story. She isn't aware that Conan Edogawa is actually Shinichi Kudo, so she keeps an eye out for Conan and takes care of him like a big sister. In quite a few episodes in the series, Ran has her suspicions that Conan is actually Shinichi, however, she is tricked into believing that Conan is just a child, and that Shinichi is off solving a difficult case somewhere. She is Shinichi's childhood sweetheart, and has a very kind hearted and easy going personality, and gets along well with everyone. Her best friend is Sonoko Suzuki, who's also been her friend since childhood. She enjoys hanging out with her friends, cooking, and reading romance novels.",
    "age": 16,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Ran.jpg?alt=media&token=18def800-65f0-40ec-8eb3-60211ac608f8",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":4,
    "name": "Amuro Toru",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "age": 27,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Amuro.jpg?alt=media&token=205dce15-f84b-42e8-9f05-bf4c2132e21f",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":5,
    "name": "Shuichi Akai",
    "description": "Shuichi Akai is an FBI agent and a major figure in the battle against the Black Organization. He once assumed the identity of Dai Moroboshi (諸星 大 Moroboshi Dai?) and infiltrated the Organization, where he was given the codename Rye (ライ Rai?). During this time he made enemies with Gin and became romantically involved with Akemi Miyano. He is the older brother of Shukichi Haneda and Masumi Sera.",
    "age": 32,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Shuichi.jpg?alt=media&token=0ac8579f-d158-4034-b287-d9f81b815373",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":6,
    "name": "Vodka",
    "description": " is a character in the manga and anime franchise Detective Conan. He is Gin's partner and, like him, was first introduced under the name of Kaspar in the English manga, but then was later renamed to Vodka.",
    "age": null,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Vodka.jpg?alt=media&token=06b91bc0-6c3e-4837-bff1-88ff299a71d1",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":7,
    "name": "Gin",
    "description": "is a member of the Black Organization and a primary antagonist of the series. He is the organization member who gave Shinichi Kudo the experimental poison APTX 4869 which turned him into Conan Edogawa.[2] He is frequently paired on missions with Vodka. In the English manga, he was first introduced as Melkior, but later was reverted to Gin. This is likely due to the fact that Conan is often reminded of the Black Organization by references to alcohol.",
    "age": null,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Gin.jpg?alt=media&token=80a2f3d9-5a94-4535-92b5-0bac5f2162eb",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":8,
    "name": "Kanenori Wakita",
    "description": " is the second-in-command of the Black Organization.",
    "age": 67,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Kanenori.jpg?alt=media&token=9c444ab6-5c98-453f-b184-86312350afa1",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":9,
    "name": "Vermouth",
    "description": "also known as Sharon Vineyard (シャロン・ヴィンヤード Sharon Vin'yādo?) and Chris Vineyard (クリス・ヴィンヤード Kurisu Vin'yādo?), is an actress and member of the Black Organization in the manga and anime franchise Detective Conan.",
    "age": 6,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Vermouth.jpg?alt=media&token=7c8a6fdf-f0a0-4129-b289-a2ee6efc60f9",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":10,
    "name": "Chianti",
    "description": "is a Black Organization sniper.",
    "age": null,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Chianti.jpg?alt=media&token=e9517c25-b604-4254-accd-4bfe7fcc5f74",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":11,
    "name": "Korn",
    "description": " a Black Organization sniper.",
    "age": null,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Korn.jpg?alt=media&token=b5575d8d-477e-4121-b9c8-ddb8650223a0",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":12,
    "name": "Kogoro Mouri",
    "description": "is a main protagonist of the manga and anime. He is a private detective and Ran Mouri's father.",
    "age": 38,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Kogoro.jpg?alt=media&token=07a8f1d2-77c8-41cc-8de2-dd0ea73b46c1",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":13,
    "name": "Eri Kisaki",
    "description": "known as Eva Kadan in the English Funimation dub, is a character in the manga and anime franchise Detective Conan. Her real name is Eri Mouri (毛利 英理 Mōri Eri?). She began to use her maiden name again after she began living separately from her husband Kogoro Mouri. She also runs her law practice under her maiden name. In a recent hospitalization, her name was displayed as 'Eri Mouri' on the door. She has one daughter, Ran Mouri.",
    "age": 38,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Eri.jpg?alt=media&token=ff447cbf-7e80-40b3-8759-6e8d814d5089",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":14,
    "name": "Sonoko Suzuki",
    "description": "known in the Funimation English dub as Serena Sebastian, is a character in the manga and anime Detective Conan. Sonoko is Ran Mouri's best friend and is the girlfriend of Makoto Kyogoku, with whom she currently is in a long-distance relationship. Conan Edogawa sometimes has to knock her out with his stun gun watch to use her as his mouthpiece. Because of this, Sonoko has claimed to be a great high school detective in her own right,'Deduction Queen Sonoko'.",
    "age": 17,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Sonoko.jpg?alt=media&token=3f2c8f93-22f1-499c-b73c-575a5df19b91",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":15,
    "name": "Hiroshi Agasa",
    "description": " most commonly referred to as Professor Agasa (阿笠博士 Agasa-hakase?), and known in the Funimation dub as Hershel Agasa, is a character in the manga and anime franchise Detective Conan. Agasa is Shinichi Kudo's next door neighbor and family friend. The first person to learn that Conan Edogawa is actually Shinichi, he invented all of Conan's special gadgets as well as the Detective Boys' badges and flashlight-watches.",
    "age": 53,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/Hiroshi.jpg?alt=media&token=44a1369a-d89f-4818-84a3-a006e4431015",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },

]
 
characters.forEach(async function(obj){
    await db.collection("characters").doc(obj.charaterId.toString()).set(obj).then(async docRef => {
      console.log(docRef.charaterId+","+docRef.picture)
     })
  });
