import React from 'react';
//destructor used here const Card = (props)   <h2>{props.name}  can be done this way also
const Card = ({name,email,id}) =>{        //destructing the props right inside the brackets 
	return (			
			<div className='tc bg-light-green dib br3 pa3 ns ma2 grow bw2 mw5 db shadow-5'>
				<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>	
			</div>	
		);
}
export default Card;