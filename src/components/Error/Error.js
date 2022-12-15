import React from 'react';
import './Error.css';
 
const Error = () => {
  window.scroll(0,0);
	return (
		<>
			<div className="error-messaging">
				<h4>🥹 Something is going wrong! 🥹</h4>
				<p>☝ Please return to home page using the Harry Potter link above.☝</p>
			</div>
		</>
	);
};

export default Error;