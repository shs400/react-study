import React from 'react'
import PropTypes from 'prop-types';   // react version 15.5부터 React.PropTypes 사용 불가하여 prop-types 사용
import Contact from './Contact';

class ContactInfo extends React.Component {
    render() {
        return (
            <div>{this.props.contact.name}{this.props.contact.phone}</div>
        )
    }
}

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>Press Me</button>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Contact/>
        )
    }
}

// propTypes 설정 예시

// class App extends React.Component {
//     render() {
//         const name = this.props.name;
//         return (
//             <div>
//                 <h1>Hello {name}</h1>
//                 <h2>{this.props.number}</h2>
//                 <div>{this.props.children}</div>
//             </div>
//         )
//     }
// }
//
// App.propTypes = {
//     name: PropTypes.string.isRequired,
// };
//
// App.defaultProps = {
//     name: 'Unknown'
// };

export default App;