import React from 'react';
import ProfileData from './ProfileData';

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            data: ProfileData,
        }
    }
    render(){
        const { data } = this.state;
        return(
            data.map((entry,index)=>{
                return(
                    <ul key={index}>
                        <li>{entry.userId}</li>
                        <li>{entry.firstName}</li>
                        <li>{entry.lastName}</li>
                        <li>{entry.jobTitleName}</li>
                    </ul>
                )
            })
        )
    }
}