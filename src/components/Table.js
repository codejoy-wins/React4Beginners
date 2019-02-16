import React, { Component } from 'react'

export class Table extends Component {
  render() {


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

    const TableBody = () => {
        return (
            <tbody>
                <tr>
                    <td>Charliex</td>
                    <td>Janitor</td>
                </tr>
                <tr>
                    <td>Mac</td>
                    <td>Bouncer</td>
                </tr>
                <tr>
                    <td>Dee</td>
                    <td>Aspiring actress</td>
                </tr>
                <tr>
                    <td>Dennis</td>
                    <td>Bartenderx</td>
                </tr>
            </tbody>
        )
    }

    return (
        <table>
            < TableHeader />
            < TableBody />
        </table>
    );
  }
}

export default Table
