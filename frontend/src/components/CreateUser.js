import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2'

const CreateUser = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState('');
    const {name} = user;
    


    useEffect(() => {
        const consultaBase = async() => {
            const url = 'http://localhost:4000/api/users';
            const respuesta = await Axios.get(url);
            setUsers(respuesta.data);


        }
        consultaBase();
    },[]);

    const consultaBase = async() => {
        const url = 'http://localhost:4000/api/users';
        const respuesta = await Axios.get(url);
        setUsers(respuesta.data);
    };

    const onSubmitForm = async(e) => {
        e.preventDefault();
        if(user.trim() === ''){
            Swal.fire('Completar el nombre de Usuario');
            return;
        }
        await Axios.post('http://localhost:4000/api/users',{
            username:user
        });
        
        consultaBase();
        Swal.fire('Usuario confirmado')
        setUser('');
    }
    
    const deleteUser =async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
            })
        await Axios.delete(`http://localhost:4000/api/users/${id}`);
        consultaBase();
    };
    
    
    

    
    return (
        <div className='container mt-4'>
            <div className='row'>
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create New User</h3>
                        <form onSubmit= {onSubmitForm} >
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Name of User'
                                    value={name}
                                    onChange = {(e) => setUser(e.target.value) }
                                
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">
                                Save
                            </button>
                        </form>
                </div>
            </div>
            <div className= "col-md-8">
                <div className="list-group">
                    {users.map(user => 
                        <li className='list-group-item list-group-item-action' key= {user._id}
                        onClick = {() => deleteUser(user._id)}
                        >{user.username}</li>
                    )}
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default CreateUser;
