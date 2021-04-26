import React from 'react'
import ChoiceCard from './ChoiceCard'
import {choiceData} from '../data';

function ChoicePlace() {
    console.log(choiceData.map(data => data.img));
    return (
        <div className='choice-place'>
            <div className='choice__title'>
                <hr/>
                <br/>
                <h1>Find your next place to live</h1>
            </div>
            <div className='choice__select'>
                <div className='choice__select_form'>
                    <select>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option selected value="coconut">Looking for</option>
                        <option value="mango">Манго</option>
                    </select>
                </div>
                <div className='choice__select_form'>
                    <select>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option selected value="coconut">Location</option>
                        <option value="mango">Манго</option>
                    </select>
                </div>
                <div className='choice__select_form'>
                    <select>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option selected value="coconut">Property Type</option>
                        <option value="mango">Манго</option>
                    </select>
                </div>
                <div className='choice__select_form'>
                    <select>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option selected value="coconut">Price</option>
                        <option value="mango">Манго</option>
                    </select>
                </div>
            </div>
            <div className='choice__cards'>
                {choiceData.map(data => (
                    <>
                        <ChoiceCard Img={data.img} name={data.name} bed={data.bed} shower={data.shower} size={data.size}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default ChoicePlace
