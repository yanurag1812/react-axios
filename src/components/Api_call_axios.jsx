import React, { useEffect, useState } from 'react'
import axios from 'axios'





function Api_call_axios() {
    const [state, setstate] = useState([]);
    const [data, setdata] = useState({

        title: " ",
        body: " "
    });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(Response => {
            console.log(Response.data);

            setstate(Response.data)
        }).catch(error => { console.log(error) })
    }, [])

    const ChangeEvent = (event) => {

        setdata({
            ...data, [event.target.name]: event.target.value
        })
    }

    const submitForm = (event) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", data).then(Response => {
            console.log(Response.data);


        }).catch(error => { console.log(error) })
    }

    return (
        <>
            <div className="container">
                <div className="row bg-dark p-4 m-5 text-center">
                    <div className="col-md-6 mx-auto ">
                        <div className="form-group">
                            <label htmlFor="title" className="form-label text-white" >Title</label>
                            <input type="text" className="form-control" id="title" name="title" onChange={ChangeEvent} placeholder="enter your title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="body" className="form-label text-white"  >body</label>
                            <input type="text" className="form-control" id="body" name="body" onChange={ChangeEvent} placeholder="enter your text body" />
                        </div>

                        <button className="btn btn-success my-2" onClick={submitForm} >submit</button>
                    </div>
                </div>

                <div className="row">
                    <table className="table table-bordered bg-danger text-white">
                        <thead>
                            <tr>
                                <th scope="col">title</th>
                                <th scope="col">body</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                state.map((item, id) => (
                                    <tr key={id}>
                                        <td> {item.title} </td>
                                        <td> {item.body} </td>

                                    </tr>
                                ))
                            }


                        </tbody>


                    </table>

                </div>
            </div>


        </>
    )
}

export default Api_call_axios
