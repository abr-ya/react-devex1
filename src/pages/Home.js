import React from 'react';
import DevexTest from '../components/DevexTest/DevexTest';
import NestedList from '../components/NestedList/NestedList';

const Home = (props) => {
    //console.log(props.github);
    
    return (
        <div>
            <h1>Главная страница</h1>
            <DevexTest />
            <NestedList />
        </div>
    )
}

export default Home;
