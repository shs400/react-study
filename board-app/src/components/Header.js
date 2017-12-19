import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppBarExampleIcon = () => (
    <AppBar
        title="게시판"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);


class NoticeBoard extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <header>
                <MuiThemeProvider>
                    <AppBarExampleIcon/>
                </MuiThemeProvider>
            </header>
        )
    }
}


export default NoticeBoard;