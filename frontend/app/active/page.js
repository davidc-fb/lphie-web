import styles from "./page.module.css";

export default async function Active(){
    // For npm run dev
    // const response = await fetch('http://127.0.0.1:5000/active');
    // For docker compose
    const response = await fetch(`${process.env.API_URL}/active`);

    const active = await response.json();

    return(
        <div>
            <h1 className={styles.activeHead}>Active Roster</h1>
            
            <div className={styles.graybox}>
                <h2 className={styles.activeHeader2}>Executive Board</h2>
                <div className={styles.box}>
                    {active.map((Active) => {
                        const key=`${Active.pos_id}`
                        const title = `${Active.title}`
                        const brother_i = `${Active.bro_i.Firstname} "${Active.bro_i.Nickname}" ${Active.bro_i.Lastname}`
                        if (Active.executive)
                            return (
                                <PositionExec key={key} role={title} bro={brother_i}/>
                            )
                    })}
                </div>
            </div>

            <div className={styles.whitebox}>
                <h2 className={styles.activeHeader2}>Minor Board</h2>
                <div className={styles.box}>
                    {active.map((Active) => {
                        const key=`${Active.pos_id}`
                        const title = `${Active.title}`
                        const brother_i = `${Active.bro_i.Firstname} "${Active.bro_i.Nickname}" ${Active.bro_i.Lastname}`
                        let brother_ii = null
                        let brother_iii = null
                        let brother_iv = null


                        if (Active.bro_ii?.Number > 0){brother_ii = `${Active.bro_ii.Firstname} "${Active.bro_ii.Nickname}" ${Active.bro_ii.Lastname}`}
                        if (Active.bro_iii?.Number > 0){brother_iii = `${Active.bro_iii.Firstname} "${Active.bro_iii.Nickname}" ${Active.bro_iii.Lastname}`}
                        if (Active.bro_iv?.Number > 0){brother_iv = `${Active.bro_iv.Firstname} "${Active.bro_iv.Nickname}" ${Active.bro_iv.Lastname}`}

                        if (Active.pos_id < 20 && !Active.executive)
                            return (
                                <PositionMinor key={key} role={title} first={brother_i} second={brother_ii} third={brother_iii} fourth={brother_iv}/>
                            )
                    })}
                </div>
            </div>
        </div>
    );
}

function PositionExec({role, bro}){
    return(
        <div className={styles.itemExec}>
            <h3 className={styles.activeHeader3}>{role}</h3>
            <div>{bro}</div>
        </div>
    )
}

function PositionMinor({role, first, second, third, fourth}){
    return(
        <div className={styles.itemMinor}>
            <h3 className={styles.activeHeader3}>{role}</h3>
            <div>{first}</div>
            <div>{second}</div>
            <div>{third}</div>
            <div>{fourth}</div>
        </div>
    )
}

