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
            lname: props.lname !== undefined ? props.lname : "Doe"
        }
    }

    render()
    {
        return (
            <>
                <form>
                    <label for="fname">First Name: </label>
                    {this.state.fname}
                    {/* <input type="text" id="fname" /> */}
                    <br/>
                    <label for="lname">Last Name: </label>
                    {this.state.lname}
                    {/* <input type="text" id="lname" /> */}
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

NameForm.propTypes =
{
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired
}