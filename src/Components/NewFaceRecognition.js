import axios from 'axios'
import React,{ useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';


function NewFace() {
  const [files, setFiles] = useState()
  const [video, setVideo] = useState()
  const [name,setUsername]  = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')

  async function uploadFile() {
    const formData = new FormData()
    console.log('upload', video)
    console.log('name', name)

    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }
    formData.append('video', video[0])
    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
    axios
      .post('https://mysterious-dawn-87140.herokuapp.com/api/faces', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjhmOTAzMmEwODA5NDcyZWNjZmZlNSIsImlhdCI6MTYyNDQ2NTk0MSwiZXhwIjoxNjI3MDU3OTQxfQ.hveteGjz1Q2D2vgs2KXcg6ef0yIxqYi-T09DOQr8_rg',
        },
      })
      .then((response) => {
        console.log(response.data)
        console.log("success")
      })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('here')
    let res = await uploadFile()
    console.log(res)
  }

  return (
    <div>
      <nav>
            <h2>Surveillance system</h2>
            <ul className="nvlink">
              <Link to="/home"><li>Home</li></Link>
              <Link to="/webcamupload"><li>Live Capture</li></Link>
              <Link to="/facerecog"><li>Face Recognition</li></Link>
              <Link to="/licenseplaterecog"><li>License Plate</li></Link>
            </ul>

        </nav>
      <br /> <br />
            <h1>Face Recognition</h1>
            <br /> <br />
      <form onSubmit={handleSubmit}>
      <MuiThemeProvider>
      <React.Fragment>
      <TextField
          type='text'
          id='name'
          name= 'name'
          label="Name"
          defaultValue = {name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        
        <TextField
          type='text'
          id='age'
          name='age'
          label="Age"
          defaultValue = {age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <TextField
          type='text'
          id='gender'
          name='gender'
          label="Gender"
          defaultValue = {gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <input
          type='file'
          id='img'
          multiple
          name='img'
          onChange={(e) => setFiles(e.target.files)}
        />
        <div className="label1">
					<label htmlFor="img" className="image-upload">
						Add Image
					</label>
				</div>
        <br />
        <input
          type='file'
          id='video'
          multiple
          name='video'
          onChange={(e) => setVideo(e.target.files)}
        />
        <div className="label1">
          <label className="image-upload" htmlFor="video">
            Add Video
          </label>
        </div>
        <br />
        <button type='submit' id="sub" className='btn btn-info'></button>
        <div className="label1">
          <label className="image-upload" htmlFor="sub">
            upload
          </label>
        </div>
        </React.Fragment>
        </MuiThemeProvider>
      </form>
    </div>
  )
}

export default NewFace
