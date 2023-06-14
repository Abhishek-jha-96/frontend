import * as React from 'react';
import TextField from '@mui/material/TextField';
import './MiddleForm.css'
import ModalDemo from './Modal'





//#94bbe9
export default function TextareaFormProps() {
  return (
    <div className='box-form'>
      <div > 
        <section className='profile'>
          <img src='' alt='img'/>
              <div className='name'>
                  <h5>Title</h5>
                    <TextField
                      id="standard-basic"
                      label="Enter Your Name"
                      variant="standard"
                      InputProps={{
                        style: { width: '180px',
                                padding: '2px',
                                borderColor: 'red'  }, // Set the desired border color here
                      }}
                    />
              </div>
            <div className='name'>
              <h5>Bio</h5>
                  <TextField
                      id="standard-basic"
                      label="Give a Bio"
                      variant="standard"
                      InputProps={{
                        style: { width: '180px',
                                padding: '2px',
                                borderColor: 'red'  }, // Set the desired border color here
                      }}
                    />
            </div>
          </section>
          <br/>
          <br/>
          <section className='profileIcon'>
            
          </section>
      </div>
      <div className='formlist'>
            <ModalDemo />
      </div>
      
    </div>
  );
}