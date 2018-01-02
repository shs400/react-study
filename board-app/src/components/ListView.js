import React from 'react';

class ListView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            keySelected: -1,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDetailClick = this.handleDetailClick.bind(this);
    };

    handleClick(index){
        this.props.isSelected(index);
    };

    handleDetailClick(index){
        let _this = this;
        new Promise(function(resolve,reject){
            resolve(_this.setState(_this.props.contact[index]))
        }).then(function (reason) {
            localStorage.setItem('userData',JSON.stringify(_this.state))
        });

    };

    render(){

        const tableDate = this.props.contact;

        const TableExampleSimple = () => (
            <div>
                <ul className="collection">
                    {tableDate.map((contact, index) => (
                        <li key={index} onClick={()=>{this.handleClick(index)}} className="collection-item dismissable"><div>{contact.name}<a href="/detailApp" className="secondary-content" contact={this.state} onClick={()=>this.handleDetailClick(index)} ><i className="material-icons">내용보기</i></a></div></li>
                    ))}
                </ul>
            </div>
        );

        return (
                <TableExampleSimple />
        );
    }
}

export default ListView;