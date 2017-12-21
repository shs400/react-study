import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

class CreateButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
                name: '',
                age: '',
                phone: '',
                email: '',
                isSelectedKey: -1,
                totalCount: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleChange(e){
        let nextState = {};
        if(e.target.name === 'name') nextState[e.target.name] = e.target.value;
        else if(e.target.name === 'age') nextState[e.target.name] = e.target.value;
        else if(e.target.name === 'phone') nextState[e.target.name] = e.target.value;
        else nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickSave(){
        const contact = {
            name: this.state.name ? this.state.name : undefined,
            age: this.state.age ? this.state.age : undefined,
            phone: this.state.phone ? this.state.phone : undefined,
            email: this.state.email ? this.state.email : undefined,
        };

        let flag = false;
        for (const key in contact) {
            if (!contact[key]) {
                alert(key+' 값을 입력하세요.');
                return flag = true;
            }
        }

        this.props.onCreate(contact);

        this.setState({
            name: '',
            age: '',
            phone: '',
            email: '',
        });
    }

    handleClickRemove(){
        this.props.onRemove()
    }

    render(){

        const style = {
            textAlign: "right",
        };

        const RaisedButtonExampleSimple = () => (
            <div style={style}>
                <RaisedButton label="SAVE" primary={true} value={this.props.UserData} onClick={this.handleClickSave} />
                <RaisedButton label="REMOVE" secondary={true} onClick={this.handleClickRemove} />
            </div>
        );

        return(
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s12">
                            <input placeholder="Name" id="first_name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Age" id="first_name" type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Phone" id="first_name" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Email" id="first_name" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </form>
                </div>
                <MuiThemeProvider>
                    <RaisedButtonExampleSimple/>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default CreateButton;