import React from 'react';
import classes from './FilesHeader.module.css';

const FilesUpload = (props) => {
    return (
        <div className={classes.FilesHeader}>
            <span className={classes.FilesHeaderText}>{props.header}</span>
        </div>
    );
}

export default FilesUpload;