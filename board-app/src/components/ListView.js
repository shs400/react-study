import React from 'react';

class ListView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            keySelected: -1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index){
        this.props.isSelected(index)
    }

    render(){

        const tableDate = this.props.contact;

        const TableExampleSimple = () => (
            <div>
                <ul className="collection">
                    {tableDate.map((contact, index) => (
                        <li key={index} onClick={()=>{this.handleClick(index)}} className="collection-item dismissable"><div>{contact.name}<a href="#!" className="secondary-content"><i className="material-icons">내용보기</i></a></div></li>
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