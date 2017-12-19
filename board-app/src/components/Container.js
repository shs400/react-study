import React from 'react';
import update from 'react-addons-update';
import CreateButton from './CreateButton';
import ListView from './ListView';

class Container extends React.Component{
    constructor(props){
        super(props);

        this.state = {
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
    }

    handleCreate(contact){
        this.setState({
           UserData: update(this.state.UserData, { $push: [contact] })
        });
    }


    render(){

        const mapToComponent = (data) => {
            return (<ListView contact={data}/>)
        };

        return (
            <div>
                <CreateButton onCreate={this.handleCreate}/>
                <div>
                    {mapToComponent(this.state.UserData)}
                </div>
            </div>
        )
    }
}

export default Container;