import React, { useState } from "react";
import axios from 'axios'
import '../components/uploadFile.css';

 function Uploadfile() {
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [file,setFile] = useState('')
    async function handleClick(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("title",title)
        formData.append("price",price)
        formData.append("files",file)
        try {
            const response = await axios({
              method: "post",
              url: "http://localhost:3000/book",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
          } catch(error) {
            console.log(error)
          }
    }

  return (
    <div className="grapper">
      <div className="container">
        <h1>ADD new Product</h1>
        <form id="form" onSubmit={handleClick}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input name="name" id="title" placeholder="Enter your title" onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input name="name" id="price" placeholder="Enter your price" onChange={(e)=>{setPrice(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="files">Select files</label>
            <input id="files" type="file" multiple onChange={(e)=>{setFile(e.target.files[0])}}/>
          </div>
          <button className="submit-btn" type="submit" >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Uploadfile;
