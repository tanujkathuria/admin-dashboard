import React from 'react';
import classes from './FilesDownload.module.css';
import FilesHeader from '../files-header/FilesHeader'
import FilesDownloadSection from "../files-download-section/FilesDownloadSection";

const FilesDownload = (props) => {
    return (
        <div className={classes.FilesDownload}>
            <FilesHeader header={"Files Download"}/>
            <FilesDownloadSection associateData={ props.associateData}
                                  budgetData = {props.budgetData}  />
        </div>
    );
}

export default FilesDownload;