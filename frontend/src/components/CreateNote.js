import React, { useState,useEffect} from 'react';
import Axios from 'axios';

const CreateNote = () => {


    const [notes,setNotes] = useState({
        //title:'',
        //content:'',
        date: new Date(),
        userSelected:  '',
        users:  [],
        //editing: false,
        //_id: ''
    });

    const {userSelected,users} = notes;
    useEffect(() => {
        const consultaBase = async() => {
            const url = 'http://localhost:4000/api/users';
            const respuesta = await Axios.get(url);
            
            setNotes({
                users: respuesta.data.map(
                    user =>  user.username
                )
            });


        }
        consultaBase();
    },[]);
    const matute = e => {
        setNotes({
            userSelected: e.target.value
        })
    }
    console.log(notes)


    const onSubmit = (e) => {
        e.preventDefault();
    };
    

    return (
        <div className= 'col-md-6 offset-md-3 mt-4 text-center'>
            <div className='card card-body'>
                <h4>Create  Note</h4>
                <form 
                    onSubmit = {onSubmit}
                > 
                    <div className="form-group">
                            <select
                                className="form-control"
                                name="userSelected"
                                
                                onChange = {matute}
                                required
                        
                                > 
                                <option  value="">--Seleccione un Usuario--</option>
                                {
                                    users.map(user => 
                                    <option value={userSelected} key={user}
                                    
                                    >{user}</option>
                                    )
                                }
                            </select>
                    </div>       
                    <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                            
                                name="title"
                                
                                required />
                        </div> 
                        <div className="form-group mt-2">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Content"
                                name="content"
                                
                                required>
                            </textarea>
                        </div>
                        <div className="form-group">
                           
                        </div>
                    <button
                        type = 'submit'
                        className="btn btn-primary mt-2"
                    >
                        Save a Note
                    </button>
                </form>
                
            </div>
            
        </div>
    )
}

export default CreateNote
