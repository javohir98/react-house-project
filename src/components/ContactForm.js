import React, { Component } from 'react'
import emailjs from 'emailjs-com';

export class ContactForm extends Component {
    render() {

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_4r5iqqg', 'template_mmrwlkq', e.target, 'user_73SWDszLQBvrJMXwTLSh3')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }

        return (
            <form className='contact-form' onSubmit={sendEmail}>
                <div className='agent'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529194285863-CJKZQYFQW19BZULFH1N4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/AlebertoCarmona-500x500.jpg" alt='client'/>
                    <h3>Kayley Hall <br/> <span>View profile</span></h3>
                </div>
                <input type='text' placeholder='Name' name='name' />
                <input type='number' placeholder='Phone' name="number" />
                <input type='email' placeholder='Email' name="email" />
                <textarea type='text' placeholder='Hello, I am interested in…'name="message" />
                <button className='btn btn-dark' type="submit">
                    Send
                    <i class="fas fa-long-arrow-alt-right"></i>
                </button>
            </form>
        )
    }
}

export default ContactForm
