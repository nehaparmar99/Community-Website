import React from "react";
import styles from "./all_broadcasts.module.css";
import Card from "./card/card";
function AllBroadcasts() {
  let str2 = `Hola learners🙋🏻‍♀️🙋🏻‍♂️
                Developing a passion for learning will never cease to grow 
                and so we have brought another opportunity for you. 🔥
                OpenMined is providing you the private AI series, which will
                 be free of cost. In this series of courses,
                you'll learn how privacy is impacting every industry and 
                how to build real-world products with privacy-preserving AI technology.
                Wondering how will you be mentored?🤔 You will get to learn
                 from the best minds in the industry and throughout the journey, 
                you will get to hear from a number of interviewed guests. 😇✨
                📚The Courses include :
                ▪️Privacy and Society [Beginner] 
                ▪️Foundations of private computation [Intermediate] 
                ▪️Federated learning across enterprises [Intermediate] 
                ▪️Federated learning on mobile [Intermediate] 
                What are you waiting for?
 
               🔖Signup for private AI Series: https://courses.openmined.org/
               🔖Subscribe to the private AI series YouTube channel:
               https://youtu.be/-b0CQFr6xyA
             🗓️The course will start form January 2021`;

  let str1 = `Crio Winter of Doing is here!!🤩🤩 India's top startups are
                lining up their tech challenges for you!! Join India's largest
                tech externship program for developers. ✅Work on challenging
                tech projects (externships) from exciting startups ✅ Interact
                with the biggest names in India's tech industry ✅ Participate
                in engaging Masterclass sessions from top engineers in the
                country ✅Get discovered by Crio's hiring partners Apply now ❗
                👇 https://www.crio.do/crio-winter-of-doing/ Limited slots are
                available ❗❗ Thank you, With regards, HITK Tech Community👩‍💻👨‍💻
                (By HITK students,For HITK students)`;
  const arrayCards = [
    ["Crio Winter Of Doing ", str1],
    ["Private AI Series", str2],
    ["Crio Winter Of Doing ", str1],
    ["Private AI Series", str2],
    ["Crio Winter Of Doing ", str1],
  ];
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.motive}>
          <h1 className={styles.carouselhead}>Broadcasts</h1>
          <div className={styles.dash}></div>
        </div>
      </div>
      <div className={styles.allCards}>
        {arrayCards.map((element, i) => {
          return <Card project={element} key={`card-${i}`} />;
        })}
      </div>
    </main>
  );
}

export default AllBroadcasts;
