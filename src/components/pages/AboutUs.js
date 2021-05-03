import React, { Component } from 'react'
import ContactForm from '../ContactForm'

import banner from '../img/about.jpg'

export class AboutUs extends Component {
    render() {
        return (
            <div className='about__us'>
                <div className='about'>
                    <div className='about__banner'>
                        <img src={banner} />
                    </div>
                    <div className='about__details'>
                        <div className='about__details-top'>
                            <h1>
                                Details 
                            </h1>
                        </div>
                        <div className='about__details-bottom'>
                            <div><i class="fas fa-bed"></i><span>3</span></div>
                            <div><i class="fas fa-bed"></i><span>3</span></div>
                            <div><i class="fas fa-swimming-pool"></i><span>3</span></div>
                            <div><i class="fas fa-vector-square"></i><span>3</span></div>
                            <div><i class="far fa-calendar"></i><span>3</span></div>
                        </div>
                    </div>
                    <div className='about__description'>
                        <div className='about__description-top'>
                            <h1>
                                Description 
                            </h1>
                        </div>
                        <div className='about__description-bottom'>
                            <p>
                                At vero eos et iusto odio dignissimos 
                                ducimus, qui haec putat, ut ipsi auctori 
                                huius disciplinae placet: constituam, 
                                quid sit numeranda nec me ab illo 
                                inventore veritatis et expedita distinctio 
                                nam libero tempore, cum memoriter, tum etiam ac ratione.
                                At vero eos et iusto odio dignissimos 
                                ducimus, qui haec putat, ut ipsi auctori 
                                huius disciplinae placet
                            </p>
                            <p>
                                Si sine metu degendae praesidia firmissima 
                                filium morte multavit si sine causa? quae fuerit 
                                causa, mox videro; interea hoc tenebo, si ob rem voluptas
                                assumenda est, quid sit extremum et inter mediocrem 
                                animadversionem atque natum sit, a natura incorrupte.
                                At vero eos et iusto odio dignissimos 
                                ducimus, qui haec putat, ut ipsi auctori 
                                huius disciplinae placet: constituam
                            </p>
                            <p>
                                Omne animal, simul atque in sanguinem suum tam inportuno 
                                tamque crudeli; sin, ut earum motus et accusamus et
                                At vero eos et iusto odio dignissimos 
                                ducimus, qui haec putat, ut ipsi auctori 
                                huius disciplinae placet: constituam, 
                                quid sit numeranda nec me ab illo 
                                inventore veritatis et expedita distinctio 
                                nam libero tempore, cum memoriter, tum etiam ac ratione.
                            </p>
                        </div>
                    </div>
                    <div className='about__features'>
                        <div className='about__features-top'>
                            <h1>
                                Features 
                            </h1>
                        </div>
                        <div className='about__features-bottom'>
                            <ul>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                                <li><i class="fas fa-check-circle"></i> Air Conditioning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ContactForm/>
            </div>
        )
    }
}

export default AboutUs
