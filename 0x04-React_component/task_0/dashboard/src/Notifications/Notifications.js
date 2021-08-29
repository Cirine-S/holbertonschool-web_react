import React from 'react'
import './Notifications.css'
import icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

const Notifications = () => {
	function clickClose() {
		console.log('Close button has been clicked')
	}
	const htmlObj = {
		__html: getLatestNotification()
	}
	return (
		<div className='Notifications'>
			<p style={{ display: 'inline' }}>Here is the list of notifications</p>
			<button style={{ float: 'right' }} aria-label="Close" onClick={clickClose}>
				<img src={icon} alt="" style={{ height: '3vh'}} />
			</button>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li dangerouslySetInnerHTML={htmlObj} data-priority="urgent"></li>
			</ul>
		</div>
	)
}

export default Notifications
