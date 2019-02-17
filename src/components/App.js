import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Cookie from './Cookie';
import Api from './Api';
import Intro from './Intro';
import Footer from './Footer';
import Header from './Header';


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
    crazy = cookies => {
        console.log("I want to manipulate the DOM saying you're crazy");
        let msg = ``;
        let odd = false;
        let newMsg = ``;
        let primeMsg = ``;

        if(cookies % 2 == 1){
            odd = true;
        }
        if(odd){
            newMsg = `
            <p>That's an odd number of cookies</p>
        `
        }else{
            newMsg = `
            <p>That's an even number of cookies</p>
            `
        }
        let prime = true;
        for(let i =2; i < cookies; i++){
            if(cookies % i ==0){
                console.log("not a prime cookie");
                prime = false;
                break;
            }else{
                console.log("prime?");
            }
        }
        if(prime && cookies >=2){
            primeMsg = `<h1>We have a prime number!</h1>`
        }

        
        if(cookies>100){
            msg = `
            <p>You're crazy for cookies!</p>
            `
        }else if(cookies>60){
            msg = `
            <p>You're really crazy.</p>
            `
        }else if(cookies>=50){
            msg = `
            <p>You're crazy.</p>
            `
        }else{
            msg =`
            <p>Aren't you hungry?</p>
            `
        }
        
        document.getElementById("output").innerHTML = msg+newMsg+primeMsg;
    }

    eatCookies = cookies => {
        cookies++;
        if(cookies >= 0){
            this.crazy(cookies);
        }
        this.setState({
            cookies: cookies
        })
    }
    eatCookiesv3 = cookies => {
        cookies*=2;
        if(cookies >= 0){
            this.crazy(cookies);
        }
        this.setState({
            cookies: cookies
        })
    }
    // reset
    eatCookiesv2 = cookies => {
        cookies=0;
        if(cookies >= 0){
            this.crazy(cookies);
        }
        this.setState({
            cookies: cookies
        })
    }

    
// I'd Like to have different themes of colors for user to choose from 

    render() {
        const { characters, cookies } = this.state;
        // give the table the props for the characters and removal method
        // give the form the method for handling submissions
        return (
            <div className="container">
                < Header />
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
                <h2>You have eaten {cookies} cookies</h2>
                < Cookie prop_cookies={cookies} eat_cookies={this.eatCookies} btn ="Eat more cookies"/>
                < Cookie prop_cookies={cookies} eat_cookies={this.eatCookiesv3} btn = "Double your cookies"/>
                < Cookie prop_cookies={cookies} eat_cookies={this.eatCookiesv2} btn = "Reset your cookies"/>


                < Intro />
                < Api />
                < Footer />
            </div>
        );
    }
}

export default App;