import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Detail extends Component {

  render () {
    console.warm(this.props.match.params.slug);
    return (
      <div>
        <Table striped bordered hover>
            <tbody>
                <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
      </div>
    )
  }
}


export default Detail;