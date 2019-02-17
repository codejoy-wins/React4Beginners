import React, { Component } from 'react'

export class Table extends Component {
  render() {

    const {characterData } = this.props; // create a variable called chardata that is the props passed from app.js

    const TableHeader = () => {
        return (
            <thead>
            <tr>
                <th>Namex</th>
                <th>Jobx</th>
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
        const myObjs = data.map((objr, mindex)=> {
            return (
                <tr key={mindex}>
                    <td>{objr.name}</td>
                    <td>{objr.job} bitch</td>
                    <p>2 to the i = {Math.pow(2,mindex)}</p>
                </tr>
            );
        });



// okay but map always throws me off

        // const rows = props.characterData.map((row, index) => {
        //     return (
        //         <tr key={index}>
        //             <td>{row.name}</td>
        //             <td>{row.job}</td>
        //         </tr>
        //     );
        // });
    
        return <tbody>{myObjs}</tbody>;
    }

    return (
        <table>
            < TableHeader />
            < TableBody characterData={characterData}/>
            {/* I think this is taking the props and passing it down as more props to the tablebody component */}
        </table>
    );
  }
}

export default Table
