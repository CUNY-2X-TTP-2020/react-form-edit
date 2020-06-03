import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            fname: props.fname !== undefined ? props.fname : "John",
            lname: props.lname !== undefined ? props.lname : "Doe",
            editable: false
        }
    }

    render()
    {
        return (
            <>
                <form>
                    <label for="fname">First Name: </label>
                    {this.state.editable ? <input type="text" id="fname" /> : this.state.fname}
                    <br/>

                    <label for="lname">Last Name: </label>
                    {this.state.editable ? <input type="text" id="lname" /> : this.state.lname}
                    <br/>

                    <input type="submit" value="Edit" />
                </form>
            </>
        );
    }
}

NameForm.propTypes =
{
    fname: PropTypes.string,
    lname: PropTypes.string
}