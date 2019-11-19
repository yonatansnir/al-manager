import React, { Component } from 'react';

class Item extends Component{
    constructor(){
        super();
        this.state = {
            style: 'item'
        }
    }
    render(){
        const { id, fullname, building, apartment, cellphone, phone, status, isopen, setOpenItem } = this.props;
        return(
        <div className={this.state.style} >
            <div className="id">{id}</div>
            <div className="fullname" onClick={setOpenItem}>{fullname}</div>
            <div className="building">{building}</div>
            <div className="apartment">{apartment}</div>
            <div className="cellphone">{cellphone}</div>
            <div className="phone">{phone}</div>
            <div className={isopen ? 'info-open' : 'info-close'}>
               <div> מידע נוסף על הדייר כמו כן תקלות וכ"ו יכנס פה</div>
        <button style={stylse} onClick={() => {this.setState({ style: 'item go-outside' })}}>יצאה לטיול</button>
        <button style={stylse} onClick={() => {this.setState({ style: 'item problem' } )}}>תקלה בדירה</button>
        <button style={stylse} onClick={() => {this.setState({ style: 'item in-hospital' } )}}>בבית חולים</button>
            </div>
        </div>
    )}
}
const stylse = {
    padding: '2px 15px',
    margin: '0 10px'
}
export default Item;