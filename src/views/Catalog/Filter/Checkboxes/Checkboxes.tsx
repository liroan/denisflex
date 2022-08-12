import classNames from "classnames";
import styles from "../../Catalog.module.scss";
import FormGroup from "@mui/material/FormGroup";
import {FormControlLabel, Switch} from "@mui/material";
import React, {FC} from "react";


const Checkboxes:FC = () => {
    return (
        <div className={classNames(styles.filter__checkboxes)}>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="по рейтингу" />
                <FormControlLabel control={<Switch defaultChecked />} label="по голосам" />
                <FormControlLabel control={<Switch defaultChecked />} label="по дате выхода" />
            </FormGroup>
        </div>
    )
}

export default Checkboxes;