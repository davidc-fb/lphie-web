// import '../styles/Roster.css';
import styles from "./page.module.css";


export default async function Roster(){
    // For npm run dev
    // const response = await fetch('http://localhost:8000/roster');
    // For docker compose
    const response = await fetch(`${process.env.API_URL}/roster`);
    
    const roster = await response.json();
    return(
        <div>
            <h1 className={styles.head}>Roster</h1>
            {roster.map((Roster) => (
                <div className={styles.Class} key={Roster.CrossingNumber}>
                    <div className={styles.ClassName}>{Roster.Class}</div>
                    <div className={styles.Semester}>{Roster.Semester}</div>
                    <div className={styles.Line}>
                        {Roster.Brothers.map(brother => (
                            <div
                                className={styles.Brother}
                                key={`${Roster.CrossingNumber}-${brother.Number}`}>
                                #{brother.Number} {brother.Firstname} "{brother.Nickname}" {brother.Lastname}
                            </div>
                        ))}
                    </div>
                </div>
                
            ))} 
        </div>
    );
}