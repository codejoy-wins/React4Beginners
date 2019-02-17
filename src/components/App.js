import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        characters: [
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
        ]
    }
    removeCharacter = index => {
        const { characters } = this.state;
// only keep ones whose index does not match index under deletion
        this.setState({
            characters: characters.filter((character,i) => {
                return i !== index;
            })
        })
    }


    render() {
        const { characters } = this.state;
        // I get that that's restructuring but where does it belong in the file?
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;