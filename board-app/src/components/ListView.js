import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class ListView extends React.Component{
    render(){

        const tableDate = this.props.contact;

        const TableExampleSimple = () => (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Age</TableHeaderColumn>
                        <TableHeaderColumn>Phone</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableDate.map((contact, index) => (
                    <TableRow key={index}>
                            <TableRowColumn>{contact.name}</TableRowColumn>
                            <TableRowColumn>{contact.age}</TableRowColumn>
                            <TableRowColumn>{contact.phone}</TableRowColumn>
                            <TableRowColumn>{contact.email}</TableRowColumn>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        );

        return (
            <div>
                <MuiThemeProvider>
                    <TableExampleSimple />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ListView;