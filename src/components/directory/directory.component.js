import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            //deals with data
            dishes: [
                {
                    title: 'Dosa',
                    id: 1,
                    subtitle: 'A South Indian Dish'
                },
                {
                    title: 'Paneer Butter Masala',
                    id: 1,
                    subtitle: 'A North Indian dish'
                }
            ]
        }
    }
    render(){
        const { dishes } = this.state;
        return(
            <div className="directory">
                {dishes.map((eachSection,index)=>{
                    return(
                    <div index={index}>
                        <MenuItem title={eachSection.title}/>
                    </div>
                )})}
            </div>
        )
    }
}

export default Directory;