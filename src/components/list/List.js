import React, { Component } from 'react';
import Item from './Item';

class List extends Component{
    constructor(){
        super();
        this.state = {
            openId: null
        }
    }
    render(){
        return(
        <div id="list">
            <h2>רשימת דיירים</h2>
            <hr />
            {this.props.tenants.map(item => {
                return (
                    <Item
                        key={item.id} 
                        id={item.id}
                        fullname={item.fullname}
                        building={item.building}
                        apartment={item.apartment}
                        cellphone={item.cellphone}
                        phone={item.phone}
                        status={item.status}
                        isopen={this.state.openId === item.id}
                        setOpenItem={() => {this.setState({ openId: this.state.openId !== item.id ? item.id : null })}}
                    />
                )
            })}
        </div>
        )
    };
}

export default List;