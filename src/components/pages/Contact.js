import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <form>
                    <div className='agent'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529194285863-CJKZQYFQW19BZULFH1N4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/AlebertoCarmona-500x500.jpg" alt='client'/>
                        <h3>Kayley Hall <br/> <span>View profile</span></h3>
                    </div>
                    <input type='text' placeholder='Name' />
                    <input type='number' placeholder='Phone' />
                    <input type='email' placeholder='Email' />
                    <textarea type='text' placeholder='Hello, I am interested in…' />
                    <button className='btn btn-dark'>
                        Send
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </form>
                <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16956.707615794752!2d69.28005271583262!3d41.296881242645746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1619600787309!5m2!1sru!2s" width="100%" height="100%" style={{border:'0',borderRadius: '25px'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}

export default Contact
