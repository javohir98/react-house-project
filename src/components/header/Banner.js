import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner({bgImg}) {
    return (
        <div className='banner' style={{backgroundImage: `url(${bgImg})`}}>
            <div className='banner-tunic'></div>
            <div className='banner-content'>
                <h1>
                    Beautiful homes made for you
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the 
                printing and  industry. Lorem 
                Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an  printer 
                took a galley of type and scrambled it to make a type 
                specimen book. It has survived not  
                </p>
            </div>
            <div className='see-all-listings'>
                <Link to='/cooperation'><h3>See all listings <i class="fas fa-long-arrow-alt-right"></i></h3></Link>
            </div>
        </div>
    )
}
