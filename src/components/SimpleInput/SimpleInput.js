import React from 'react';
import './SimpleInput.css';

const SimpleInput = ({inputValue, setInputValue}) => {
	const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            console.log('что-то делаем с', inputValue);
            setInputValue('');
        } 
	}

	return (
		<div className="simple-input d-flex btn-group">
			<input type="text"
				className="form-control search-input"
				placeholder="search"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyPress={keyPressHandler}
			/>
			<button className="btn btn-outline-secondary">
				ItemAdd
			</button>
		</div>
	);

};
		

export default SimpleInput;
