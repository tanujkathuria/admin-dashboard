import React,{Component} from 'react';
import classes from './FilesDownloadSection.module.css';

import { CSVLink } from "react-csv";



const associateHeaders = [
    { label: "id", key: "id" },
    { label: "age", key: "age" },
    { label: "experience", key: "experience" },
    { label: "name", key: "name" }
];
const budgetHeaders = [
    { label: "id", key: "id" },
    { label: "name", key: "name" },
    { label: "profit", key: "profit" }
];

const FilesDownloadSection = (props) =>  {
        return (
            <div className={classes.FilesDownloadSection}>
                <CSVLink data={props.associateData} headers={associateHeaders} filename={"AssociateData.csv"}
                         className={classes.round} > ASSOCIATE DATA</CSVLink>
                <CSVLink data={props.budgetData} headers={budgetHeaders} filename={"BudgetData.csv"}
                         className={classes.round} > BUDGET DATA</CSVLink>
            </div>
        );
}

export default FilesDownloadSection;