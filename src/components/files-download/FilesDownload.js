import React from 'react';
import classes from './FilesDownload.module.css';
import FilesHeader from '../files-header/FilesHeader'
import FilesDownloadSection from "../files-download-section/FilesDownloadSection";
import * as constants from '../../util/Constants'

const FilesDownload = (props) => {
    return (
        <div className={classes.FilesDownload}>
            <FilesHeader header={constants.FILE_DOWNLOAD_HEADER}/>
            <FilesDownloadSection associateData={ props.associateData}
                                  budgetData = {props.budgetData}  />
        </div>
    );
}

export default FilesDownload;