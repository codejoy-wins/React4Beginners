import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
            {
                'name': "Max Jann",
                'job': "Coder"
            }
        ]
    }
    removeCharacter = index => {
        const { characters } = this.state;
// only keep ones whose index does not match index under deletion
// refactored my code to elimate return with es6
        this.setState({
            characters: characters.filter((character,i) => i !== index
            )
        })
    }

    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters,character]
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
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;