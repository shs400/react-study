import React from 'react';
import update from 'react-addons-update';
import CreateButton from './CreateButton';
import ListView from './ListView';
import Counter from './Counter'

class Container extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedKey: -1,
            UserData: [
                {
                    name: 'SIM',
                    age: '30',
                    phone: '010-0000-0000',
                    email: 'tlagustn88@naver.com',
                },
                {
                    name: 'KIM',
                    age: '20',
                    phone: '010-1111-1111',
                    email: 'gustndod@daum.net',
                },
                {
                    name: 'LIM',
                    age: '10',
                    phone: '010-22222-2222',
                    email: 'simhs5082@gmail.com',
                }
            ]
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleCreate(contact){
        this.setState({
           UserData: update(this.state.UserData, { $push: [contact] })
        });
    }

    handleRemove(){
        this.setState({
            UserData: update(this.state.UserData, { $splice: [[this.state.selectedKey, 1]]}), selectedKey: -1
        });
    }

    handleSelected(index) {
        this.setState({
            selectedKey:index
        });
    }

    render(){

        const mapToComponent = (data) => {
            return (<ListView contact={data} isSelected={this.handleSelected}/>)
        };

        return (
            <div>
                <CreateButton onCreate={this.handleCreate} onRemove={this.handleRemove}/>
                <Counter contact={this.state.UserData} />
                <div>
                    {mapToComponent(this.state.UserData)}
                </div>
            </div>
        )
    }
}

export default Container;