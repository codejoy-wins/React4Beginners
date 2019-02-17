import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            },
            {
                'name': 'Charliev2',
                'job': 'Janitorv2'
            },
            {
                'name': 'Macv2',
                'job': 'Bouncerv2'
            },
            {
                'name': 'Deev2',
                'job': 'Aspring actressv2'
            },
            {
                'name': 'Dennisv2',
                'job': 'Bartenderv2'
            }
        ];
        return (
            <div className="container">
                <Table characterData={characters}/>
            </div>
        );
    }
}

export default App;