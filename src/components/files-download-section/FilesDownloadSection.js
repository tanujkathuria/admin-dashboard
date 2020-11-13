import React,{Component} from 'react';
import classes from './FilesDownloadSection.module.css';
import { CSVLink } from "react-csv";
import * as constants from '../../util/Constants';

const FilesDownloadSection = (props) =>  {
        return (
            <div className={classes.FilesDownloadSection}>
                <CSVLink data={props.associateData} headers={constants.ASSOCIATE_HEADERS} filename={constants.ASSOCIATE_FILENAME}
                         className={classes.round} > ASSOCIATE DATA</CSVLink>
                <CSVLink data={props.budgetData} headers={constants.BUDGET_HEADERS} filename={constants.BUDGET_FILENAME}
                         className={classes.round} > BUDGET DATA</CSVLink>
            </div>
        );
}

export default FilesDownloadSection;