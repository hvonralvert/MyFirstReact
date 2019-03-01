import React, { Component } from 'react';

class Table extends Component {

    render() {
        const { characterData } = this.props;

        const TableBody = () => {
            return (
                <tbody>
                </tbody>
            )
        }

        const TableHeader = () => {
            return (
                <thead class="TableHeader">
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
            )
        }

        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody characterData={characterData}></TableBody>
            </table>
        )
    }
}

export default Table;
