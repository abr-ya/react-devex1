import React from 'react';

const About = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>About page</h1>
                <p>Это приложение ...</p>

                <h2>To do</h2>
                <p>Как всегда есть куча мыслей о том, что можно улучшить:</p>
                <ul>
                    <li className="done">сделано</li>
                    <li>не сделано</li>
                    <li>и... </li>
                </ul>
            </div>
        </div>
    )
}

export default About;
