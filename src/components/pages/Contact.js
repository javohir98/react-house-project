import React, { Component } from 'react'
import ContactForm from '../ContactForm';

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <ContactForm />
                <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16956.707615794752!2d69.28005271583262!3d41.296881242645746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1619600787309!5m2!1sru!2s" width="100%" height="100%" style={{border:'0',borderRadius: '25px'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}

export default Contact
