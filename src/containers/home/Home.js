import React, { Fragment, Component } from 'react';
import classes from './Home.module.css';

import FilesUpload from '../components/files-upload/FilesUpload';
import FilesDownload from '../components/files-download/FilesDownload';

class Home extends Component {

    render() {
        return (
            <div className={classes.Home}>
                    <FilesUpload />
                    <FilesDownload />
            </div>
        );
    }

};

export default Home;