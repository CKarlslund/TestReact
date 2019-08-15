import React from 'react';
import { Button } from 'reactstrap';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
fetch('https://testwebapi666.azurewebsites.net/api/todo/', 
    {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"name": this.input.value, "isComplete": false})
    });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label>Titel</label>
                    <input class="form-control" type="text" ref={(input) => this.input = input} />
                </div>  
                <div>       
                    <Button color="primary" type="submit" value="submit">Lägg till</Button>
                </div>
            </form>
        );
    }
}

export default Form;