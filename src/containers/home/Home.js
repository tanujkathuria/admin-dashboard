import React, {  Component } from 'react';
import classes from './Home.module.css';

import FilesUpload from '../../components/files-upload/FilesUpload';
import FilesDownload from '../../components/files-download/FilesDownload';
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import * as constants from '../../util/Constants';

class Home extends Component {

    componentDidMount() {
        this.props.fetchAssociateData();
        this.props.fetchBudgetData();
    }


    fileSelected = (event) => {
        this.props.setSelectedFileType(event.target.value, false);
        this.props.setSelectedFileName('', false);
    }


    // On file upload (click the upload button)
    onFileUpload = () => {
        // save associate data
        if(this.props.selectedFileType == constants.ELIGIBLE_ASSOCIATE_FILE ){
            this.props.setAssociateData(this.props.data);
        }
        //update the associate data using delta file
        else if(this.props.selectedFileType == constants.ELIGIBLE_ASSOCIATE_DELTA_FILE) {
            this.props.setAssociateDelta(this.props.data);
        }
        //save budget data
        else {
            this.props.setBudgetData(this.props.data);
        }
    };

    handleUploadedFiles = files => {
        var reader = new FileReader();
        reader.onload = (e) => {
            //Split csv file data by new line so that we can skip first row which is header
            let jsonData = reader.result.split('\n');
            let data = [];
            jsonData.forEach((element, index) => {
                if(index) {
                    //Split csv file data by comma so that we will have column data
                    const elementRaw = element.split(',');
                    if(element) {
                        let param = null;
                        if(this.props.selectedFileType == constants.ELIGIBLE_ASSOCIATE_FILE
                            || this.props.selectedFileType == constants.ELIGIBLE_ASSOCIATE_DELTA_FILE ){
                            param = {
                                'id' : elementRaw[0],
                                'age' : elementRaw[1],
                                'experience' : elementRaw[2],
                                'name' : elementRaw[3]
                            }
                            data.push(param);
                        }
                        else{
                            param = {
                                'id' : elementRaw[0],
                                'name' : elementRaw[1],
                                'profit' : elementRaw[2],
                            }
                            data.push(param);
                        }
                    }
                }
            });;
            this.props.setData(data);
        }

        if(files && files[0]){
            reader.readAsText(files[0]);
            this.props.setSelectedFile(files[0]);
            this.props.setSelectedFileName(files[0].name, false);
        }
    }


    render() {

        return (
            <div className={classes.Home}>
                {this.props.error ? (
                        <div className="alert alert-danger" role="alert">
                            {this.props.error}
                        </div>
                ): ''}
                {this.props.message ? (
                    <div className="alert alert-success" role="alert">
                        {this.props.message}
                    </div>
                ): ''}
                <FilesUpload filename = {this.props.selectedFileName}
                             handleUploadedFiles ={this.handleUploadedFiles}
                             disabled = {this.props.disabled}
                             id={this.props.id}
                             fileSelected = {this.fileSelected}
                             onFileChange={this.onFileChange}
                             onFileUpload={this.onFileUpload}/>
                <FilesDownload associateData={ this.props.associateData}
                               budgetData = {this.props.budgetData}/>
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => {
    return {
        setAssociateData : (data) => dispatch(actions.setAssociateData(data)),
        setBudgetData : (data) => dispatch(actions.setBudgetData(data)),
        setAssociateDelta : (data) => dispatch(actions.setAssociateDelta(data)),
        fetchAssociateData : () => dispatch(actions.fetchAssociateData()),
        fetchBudgetData : () => dispatch(actions.fetchBudgetData()),
        setData : (data) => dispatch(actions.setData(data)),
        setSelectedFileName : (fileName, disabled) => dispatch(actions.setSelectedFileName(fileName, disabled)),
        setSelectedFile : (file) => dispatch(actions.setSelectedFile(file)),
        setSelectedFileType :  (fileType, disabled) => dispatch(actions.setSelectedFileType(fileType, disabled)),
        setError : (error) => dispatch(actions.setError(error))
    }
}



const mapStateToProps = state => {
    return {
        associateData : state.reducer.associateData,
        budgetData : state.reducer.budgetData,
        data  : state.reducer.data,
        disabled : state.reducer.disabled,
        selectedFileName: state.reducer.selectedFileName,
        selectedFileType: state.reducer.selectedFileType,
        selectedFile: state.reducer.selectedFile,
        id: state.reducer.id,
        error: state.reducer.error,
        message: state.reducer.message

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);