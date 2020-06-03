import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NameForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            fname: props.fname !== undefined ? props.fname : "John",
            lname: props.lname !== undefined ? props.lname : "Doe",
            showInputs: false,
        };
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState(
        {
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            showInputs: false,
        });
    };

    changeView = () =>
    {
        this.state.showInputs ? this.setState({ showInputs: false }) : this.setState({ showInputs: true });
    };

    render() 
    {
        return (
            <div>
            {
                this.state.showInputs ?
                (
                    <form onSubmit={this.handleSubmit}>
                        <div>First Name</div>
                        <input type="text" name="fname" id="fname" placeholder={this.state.fname} />
                        <br/><br/>

                        <div>Last Name</div>
                        <input type="text" name="lname" id="lname" placeholder={this.state.lname} />
                        <br/>
                        
                        <button type="submit">Save</button> 
                        <button onClick={this.changeView}>Cancel</button>
                    </form>
                ):
                (
                    <div>
                        <div>First Name: {this.state.fname}</div>
                        <div>Last Name: {this.state.lname}</div>
                        <button onClick={this.changeView}>Edit</button>
                    </div>
                )
            }
            </div>
        );
    }
}

NameForm.propTypes =
{
    fname: PropTypes.string,
    lname: PropTypes.string
}