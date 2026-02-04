import Image from "next/image";
import styles from "./page.module.css"

export default function Recruitment(){
    return(
        <div className={styles.recruitmentContent}>
            <div className={styles.recruitmentImage}>
                <Image src="/Recruitment1.jpg" width={1080} height={1350}/>
                <Image src="/Recruitment2.jpg" width={1080} height={1350}/>
            </div>
            <h2 className={styles.header1}>Frequently Asked Questions</h2>
            <div className={styles.whitebox}>
                <h3 className={styles.header2}>What is Rush?</h3>
                <p>Rush is a recruitment period at the beginning of the school quarter or semester when anyone interested in Greek life can attend events set up by a local chapter to meet its members and learn more about their organization. Rush usually lasts about 1-2 weeks, with events held every day that showcase various aspects of the fraternity.</p>
            </div>
            <div className={styles.whitebox}> 
                <h3 className={styles.header2}>Should I attend all the rush events?</h3>
                <p>If you are serious about joining Lambda Phi Epsilon, you are highly encouraged to attend all rush events from beginning to end. Rush is designed to give interested individuals a glimpse into real fraternity life, so the more you experience and see for yourself, the better idea you will have of whether the fraternity is something you want to be a part of.</p>
            </div>
            <div className={styles.whitebox}> 
                <h3 className={styles.header2}>Am I required to pledge if I attend rush?</h3>
                <p>No, there is no obligation for you to take action after rush has concluded. Rush is simply an opportunity for you to introduce yourself and become more familiar with the fraternity and the brothers.</p>
            </div>
            <div className={styles.whitebox}>
                <h3 className={styles.header2}>What happens after rush?</h3>
                <p>Upon attending rush, if you feel that Lambda Phi Epsilon may be a good fit for you, you can inquire further about the “bidding” process which usually includes a formal interview, followed by an invitation to pledge the fraternity.</p>
            </div>
            <div className={styles.whitebox}>
                <h3 className={styles.header2}>Do I have to be Asian to join?</h3>
                <p>No. Lambda Phi Epsilon is an Asian interest fraternity that focuses on the promotion of Asian American awareness, but members of every ethnicity, race, religion, and creed are accepted.</p>
            </div>
            <div className={styles.whitebox}>
                <h3 className={styles.header2}>Will joining a fraternity impact my education?</h3>
                <p>While you are encouraged to learn more about the Greek system, we want you to remember why you are at school in the first place. Lambda Phi Epsilon's first and foremost purpose is to promote academic achievement and this priority is stressed even to prospective members. Like any worthwhile undertaking, joining a fraternity will most likely require some time and effort. Managing school and joining a fraternity is definitely possible, though, and part of becoming a Lambda is learning how to handle these challenges and become a responsible, well-rounded individual. The active members of the fraternity are students as well, and they will be committed to ensuring your academic success. Be sure to find the right balance to have a rewarding college life both academically and socially.</p>
            </div>

            <div className={styles.whitebox}>
                <h3 className={styles.header2}>May graduate students join?</h3>
                <p>Yes! Graduate students may join a chapter in good standing as long as they are enrolled in their respective university. Please contact any member of the International Board's Education Team for further information.</p>
            </div>

        </div>
    );
}