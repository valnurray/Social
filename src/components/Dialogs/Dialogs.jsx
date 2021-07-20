import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Vasya
                </div>

                <div className={classes.dialog}>
                    Ivan
                </div>

                <div className={classes.dialog}>
                    Makar
                </div>

                <div className={classes.dialog}>
                    Sveta
                </div>

                <div className={classes.dialog}>
                    Dasha
                </div>

            </div>
            <div className={classes.messages}>
                <div className={classes.message}> Hi</div>
                <div className={classes.message}> Buy</div>
                <div className={classes.message}> Wai</div>
            </div>
        </div>
    );
}

export default Dialogs;