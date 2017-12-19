import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

let nextState = {};
class CreateButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            UserData: [
                {
                    name: '',
                    age: '',
                    phone: '',
                    email: ''
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleChange(e){
        if(e.target.name === 'name') nextState[e.target.name] = e.target.value;
        else if(e.target.name === 'age') nextState[e.target.name] = e.target.value;
        else if(e.target.name === 'phone') nextState[e.target.name] = e.target.value;
        else nextState[e.target.name] = e.target.value;
    }

    handleClickSave(){
        const contact = {
            name: nextState.name,
            age: nextState.age,
            phone: nextState.phone,
            email: nextState.email,
        };
        this.props.onCreate(contact);

        console.log('asd: ',this.props.onCreate(contact))

        this.setState({
            name: '',
            phone: ''
        })
    }

    handleClickRemove(){
        console.log('REMOVE');
    }

    render(){


        const styleRight = {
            textAlign: "right"
        };

        const RaisedButtonExampleSimple = () => (
            <div style={styleRight}>
                <RaisedButton label="SAVE" primary={true} value={this.props.UserData} style={style} onClick={this.handleClickSave} />
                <RaisedButton label="REMOVE" secondary={true} style={style} onClick={this.handleClickRemove} />
            </div>
        );

        const style = {
            marginLeft: 20,
        };

        const DividerExampleForm = () => (
            <Paper zDepth={2}>
                <TextField hintText="Name" style={style} underlineShow={false} data-set="name" name="name" placeholer="name" value={this.state.UserData.name} onChange={this.handleChange} />
                <Divider />
                <TextField hintText="Age" style={style} underlineShow={false} data-set="age" name="age" placeholer="age" value={this.state.UserData.age} onChange={this.handleChange} />
                <Divider />
                <TextField hintText="Phone Number" style={style} underlineShow={false} data-set="phone" name="phone" placeholer="phone" value={this.state.UserData.phone} onChange={this.handleChange} />
                <Divider />
                <TextField hintText="Email address" style={style} underlineShow={false} data-set="email" name="email" placeholer="email" value={this.state.UserData.email} onChange={this.handleChange} />
                <Divider />
            </Paper>
        );

        return(
            <div>
                <MuiThemeProvider>
                    <DividerExampleForm/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButtonExampleSimple/>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default CreateButton;