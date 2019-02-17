import React, { Component } from 'react'

export class Table extends Component {
  render() {

    const {characterData, removeCharacter } = this.props; // create a variable called chardata that is the props passed from app.js

    const TableHeader = () => {
        return (
            <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>2 to the i</th>
            </tr>
            </thead>
        )
    }
// copy and pasted the TableBody; this part is hard for me.
// I get that TableBody is a function that takes in a single parameter of props which is the character list of objects from app.js
// Then it somehow maps each object from the list into what?
    const TableBody = props => { 
        console.log(props);
        console.log(props.characterData);
// starting to make sense
        console.log(props.characterData[0]);
        console.log(props.characterData[0].name);
        const charlie = props.characterData[0];
        const charlieName = props.characterData[0].name;
        console.log(`${charlieName} is a ${charlie.job}`);
        const data = props.characterData;
        console.log(props.characterData);
        console.log(data);
        // okay I get it!  
        // Map takes in 2 parameters
        // One to refer to the current object for the function to use
        // the other to reference the current index of the list it's mapping
        // the .map method applies to an array of objects, and for each object in the list, it creates a variable objr for that object, and increments mindex. 

        // then all of the data is trapped in the myObjs element I use in tbody
        const myObjs = data.map((objr, mindex)=> {
            
            return (
                <tr key={mindex}>
                    <td>{objr.name}</td>
                    {/* I want to do an if statement and say nice guy if index > 10 */}
                    <td>American {objr.job}</td>
                    <td>{Math.pow(2,mindex)}</td>
                    <td><button onClick={()=> props.removeCharacter(mindex)}>delete</button></td>

                </tr>
            );
        });
// okay but map always throws me off so I redid my own above
        return <tbody>{myObjs}</tbody>;
    }

    return (
        <table>
            < TableHeader />
            < TableBody
                characterData={characterData}
                removeCharacter={removeCharacter}
            />
            {/* I think this is taking the props and passing it down as more props to the tablebody component */}
        </table>
    );
  }
}

export default Table
