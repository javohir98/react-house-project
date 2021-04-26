import React from 'react'
import gooHands from './img/good-hands.jfif';

function GoodHandsRight() {
    return (
        <div className='good-hands__right'>
            <div className='good__content'>
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
                <img src={gooHands} />
            </div>
        </div>
    )
}

export default GoodHandsRight
