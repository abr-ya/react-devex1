import React, {useState} from 'react';
import SimpleInput from '../components/SimpleInput/SimpleInput';

const Form = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="container">
            <h1>Form page</h1>
            <p>Это будет страница с формой ...</p>
            <SimpleInput inputValue={inputValue} setInputValue={setInputValue} />

        </div>
    )
}

export default Form;
