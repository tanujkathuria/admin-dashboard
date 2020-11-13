import React from 'react';
import classes from './FileUploader.module.css';
import Button from '../ui/button/Button';
import ReactFileReader from "react-file-reader";


const FilesUploader = (props) => {

    return (
        <div  className={classes.FileUploader}>
            <ReactFileReader handleFiles={props.handleUploadedFiles} fileTypes={'.csv'}>
                <Button disabled = {props.disabled} id={props.id} btnType='round' >Upload </Button>
            </ReactFileReader>
            <Button disabled = {props.disabled} btnType='filledRound' clicked={props.onFileUpload}>SUBMIT </Button>
            {props.filename}
        </div>
    );
}

export default FilesUploader;