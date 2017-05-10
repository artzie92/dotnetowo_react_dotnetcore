import React, { Component } from 'react'
import PeopleListComponent from '../components/people-list.component';

class AppContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Welcome on dotnetowo.pl
                <PeopleListComponent name={'My first child component'} />
            </div>
        );
    }
}

export default AppContainer;