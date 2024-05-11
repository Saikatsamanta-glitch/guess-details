import React from 'react';
import './Cards.css';

export default function Cards({name, age, gender, nationality}) {
  return (
    <div className="containers mb-16">
    <div className="terminal_toolbar">
        <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
        </div>
        <p className="user">johndoe@admin: ~</p>
        <div className="add_tab">
            +
        </div>
    </div>
    <div className="terminal_body">
        <div className="terminal_promt">
            <span className="terminal_user">johndoe@admin:</span>
            <span className="terminal_location">~ <br/>
            <span className="terminal_path"> Name : {name} </span>
            <br/>
            <span className="terminal_path"> Age : {age} </span>
            <br/>
            <span className="terminal_path"> Gender : {gender} </span>
            <br/>
            <span className="terminal_path"> Nationality : {nationality} </span>

            </span>
            <span className="terminal_bling">
            <br/> 
            <span className="details"></span>           
            </span>
            <span className="terminal_cursor"></span>
        </div>
    </div>
</div>
  )
}


