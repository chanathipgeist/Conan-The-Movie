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
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":2,
    "name": "Conan Edogawa",
    "description": "Conan Edogawa is the alternative version of Shinichi Kudo. He's the main protagonist of the story. His real name is Shinichi Kudo, highschool detective. However, he hides his identity from others and goes by the name 'Conan Edogawa', a kid who attends Teitan Elementary. However, some know of his identity, and keep it a secret from others. He loves to act cute in front of adults to get their attention, especially during a case. Even though he's the size of a kid, he still has his intellect and the mind of an adult. Even though he can appear quite carefree and chappy around adults and those older than him, Conan's personality is the same as when he's Shinichi. He can be a bit stubborn and calculating when he doesn't get his way, and often has a short temper. He watches over Ran, and makes sure she's okay. While Ran takes care of him and sees Conan as a little brother. His relationship with Ran as Conan is more seen as a close brother and sister relationship. Conan is treated as a separate character from Shinichi among fans. He enjoys playing soccer, solving cases, reading mystery novels and manga, and spending time with Ran.",
    "age": 6,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":3,
    "name": "Ran Mouri",
    "description": "Ran Mouri is Shinichi Kudo's childhood sweetheart. She is one of the main protagonists in the story. She isn't aware that Conan Edogawa is actually Shinichi Kudo, so she keeps an eye out for Conan and takes care of him like a big sister. In quite a few episodes in the series, Ran has her suspicions that Conan is actually Shinichi, however, she is tricked into believing that Conan is just a child, and that Shinichi is off solving a difficult case somewhere. She is Shinichi's childhood sweetheart, and has a very kind hearted and easy going personality, and gets along well with everyone. Her best friend is Sonoko Suzuki, who's also been her friend since childhood. She enjoys hanging out with her friends, cooking, and reading romance novels.",
    "age": 16,
    "gender": "Female",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  },
  {
    "charaterId":4,
    "name": "Amuro Toru",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "age": 89.99,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": false
  },
  {
    "charaterId":5,
    "name": "Shuichi Akai",
    "description": "Shuichi Akai is an FBI agent and a major figure in the battle against the Black Organization. He once assumed the identity of Dai Moroboshi (諸星 大 Moroboshi Dai?) and infiltrated the Organization, where he was given the codename Rye (ライ Rai?). During this time he made enemies with Gin and became romantically involved with Akemi Miyano. He is the older brother of Shukichi Haneda and Masumi Sera.",
    "age": 32,
    "gender": "Male",
    "picture": "https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/shy.png?alt=media&token=5f868a45-f146-45a9-949a-b4626eab3677",
    "dob": new Date("2023-12-18T00:00:00Z"),
    "isGood": true
  }
]
 
characters.forEach(async function(obj){
    await db.collection("characters").doc(obj.charaterId.toString()).set(obj).then(async docRef => {
      console.log(docRef.charaterId+","+docRef.picture)
     })
  });
