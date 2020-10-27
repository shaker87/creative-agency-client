import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AdminAddService.css'


const AdminAddService = () => {
    const history = useHistory();
    const [file, setFile] = useState(null);
    const [serviceInfo, setServiceInfo] = useState({});
    const handleBlur = event => {
        const newServiceInfo = { ...serviceInfo }
        newServiceInfo[event.target.name] = event.target.value;
        setServiceInfo(newServiceInfo);
        console.log(serviceInfo)
    }
    const handleFileChange = event => {
        const newFileInfo = event.target.files[0];
        setFile(newFileInfo);
        console.log(newFileInfo)
    }

    const handleAddService = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);

        fetch('https://stormy-temple-56876.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    history.push(`/home`);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6" >
                    <div className='container m-5 add-service-form-container'>
                        <form onSubmit={handleAddService}>
                            <div class="form-group">
                                <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <textarea onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="description" />
                            </div>
                            <div class="form-check">
                                <input onChange={handleFileChange} type="file"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminAddService;