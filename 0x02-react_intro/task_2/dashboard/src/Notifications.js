import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'
import {getLatestNotification} from './utils'

export const Notif = () => {
    return (
        <div className="Notifications">
            <button
                type="button"
                style={{  display:"flex", padding:0, justifyContent:"flex-end", background: 'none', border: "none", fontWeight: "bold"}}
                aria-label="Close"
                onClick={()=>console.log("Close button has been clicked")}>
                    <img src={closeIcon} alt="closeIcon" style={{"height":10, "weight":10, "padding":5}} />
            </button>
			<p>Here is the list of notifications</p>

			<ul style={{"padding": "0 18px"}}>
				<li dataPriority="default">
					New course available
				</li>
				<li dataPriority="urgent">
					New resume available
				</li>
				<li
					dataPriority="urgent"
					dangerouslySetInnerHTML={{__html: getLatestNotification()}}
				>
				</li>
			</ul>
        </div>
    );
};