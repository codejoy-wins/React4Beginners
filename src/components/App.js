import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Cookie from './Cookie';


class App extends Component {
    state = {
        characters: [
            {
                'name': "Max Jann",
                'job': "Coder"
            }
        ],
        cookies: 42,
    }
    // Take in an index and create a new list based on that index
    removeCharacter = index => {
        const { characters } = this.state;
// only keep ones whose index does not match index under deletion
// refactored my code to elimate return with es6
        this.setState({
            characters: characters.filter((character,i) => i !== index
            )
        })
    }
    // Take in an object and create new list with that obj added
    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters,character]
        })
    }

    eatCookies = cookies => {
        cookies++;
        this.setState({
            cookies: cookies
        })
    }

    render() {
        const { characters, cookies } = this.state;
        // I get that that's restructuring but where does it belong in the file?
        // give the table the props for the characters and removal method
        // give the form the method for handling submissions
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
                < Cookie prop_cookies={cookies} eat_cookies={this.eatCookies}/>
            </div>
        );
    }
}

export default App;