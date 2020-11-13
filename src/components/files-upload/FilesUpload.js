import React from 'react';
import classes from './FilesUpload.module.css';
import FilesHeader from "../files-header/FilesHeader";
import FilesUploadSection from '../files-upload-section/FilesUploadSection';


const FilesUpload = (props) => {
    return (
        <div className={classes.FilesUpload}>
            <FilesHeader header={"Files Upload"}/>
            <FilesUploadSection filename={props.filename} handleUploadedFiles ={props.handleUploadedFiles}
                                disabled={props.disabled} id= {props.id} fileSelected = {props.fileSelected}
                                onFileChange={props.onFileChange} onFileUpload={props.onFileUpload}/>
        </div>
    );
}

export default FilesUpload;