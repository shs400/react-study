import React from 'react';
import Header from './Header';
import Home from './Home';
import DetailApp from './DetailApp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render (){
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/detailapp" component={DetailApp} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;