import React from 'react';
import classes from './FilesUploadSection.module.css';
import FilesUploader from '../file-uploader/FilesUploader'

const FilesUploadSection = (props) => {
    return (
        <div className={classes.FilesUploadSection}>
            <span className={classes.FilesUploadRadioSection} onChange={(event) => props.fileSelected(event)}>
                <input type="radio" value="eligibleAssociateFile" name="file"/> Eligible Associate File <br/>
                <input type="radio" value="eligibleAssociateDeltaFile" name="file"/> Eligible Associate Delta File<br/>
                <input type="radio" value="budgetFile" name="file"/> Budget File<br/>
            </span>
            <span className={classes.FileUploadSection}>
            <FilesUploader filename = {props.filename}
                           handleUploadedFiles = {props.handleUploadedFiles}
                           disabled = {props.disabled} id={props.id} onFileChange={props.onFileChange} onFileUpload={props.onFileUpload}></FilesUploader>
            </span>
        </div>
    )
}

export default FilesUploadSection;