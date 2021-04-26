import React from 'react'

function ChoiceCard({ name, Img, bed, shower, size }) {
    return (
        <div className='choice__card'>
            <div className='choice__card-img'>
                <img src={Img} alt={name}/>
            </div>
            <div className='choice__card-content'>
                <h1>{name}</h1>
                <div className='choice__card-tags'>
                    <div>
                        <i class="fas fa-bed"></i>
                        <span>{bed}</span>
                    </div>
                    <div>
                        <i class="fas fa-bath"></i>
                        <span>{shower}</span>
                    </div>
                    <div>
                        <i class="fas fa-swimming-pool"></i>
                        <span>{size}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoiceCard
