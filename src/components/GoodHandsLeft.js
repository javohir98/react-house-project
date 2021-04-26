import React from 'react'
import gooHands from './img/good-hands.jfif'

function GoodHandsLeft() {
    return (
        <div className='good-hands__left'>
            <div className='good__content'>
                <img src={gooHands} />
                <div className='good__text'>
                    <hr/>
                    <h1>
                        You're in good hands
                    </h1>
                    <p>
                    Torquatos nostros? quos dolores eos, 
                    qui dolorem ipsum per se texit, ne 
                    ferae quidem se repellere, idque instituit 
                    docere sic: omne animal, simul atque integre 
                    iudicante itaque aiunt hanc quasi involuta aperiri, 
                    altera occulta quaedam et voluptatem accusantium doloremque.
                    </p>
                    <button className='btn btn-dark'><a>Learn more </a><i className='fas fa-long-arrow-alt-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default GoodHandsLeft
