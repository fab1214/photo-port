import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

const ContactForm = () => {
    //create hook for useState to set initial form state to be blank whenever component loads
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    //destructure formState object into 3 properties
    const {name, email, message} = formState;
    //handleChange syncs the internal state of the component formState with the user input from the DOM
    const handleChange = (e) => {
        //if name attribute is email, run validation function and assign it to isValid
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //if not error message, allow user to set the form state
        if(!errorMessage){
        //setFormState updates values in each formState property (ex. name, email, message)
        //e.target.name targets name attribute assigned to each property on the form 
        //e.target.value captures user input and assigns it to the properites of the formState 
        setFormState({...formState, [e.target.name]: e.target.value })
            }    
    }

    // console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" defaultValue={name}>Name:</label>
          <input type="name" defaultValue={name} name="name" onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="email" defaultValue={email}>Email address:</label>
          <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="mesage" defaultValue={message}>Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default ContactForm;
