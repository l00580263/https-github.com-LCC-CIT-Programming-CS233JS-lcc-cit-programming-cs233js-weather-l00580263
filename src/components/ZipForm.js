import React, { Component } from 'react';

class ZipForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            zipcode: "",
        }

        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    }



    render()
    {
        return (
            <div className="zip-form">
                <form id="zipForm" onSubmit={this.submitZipCode}>
                    <div className="flex-parent">
                        <label htmlFor="zipcode">Zip</label>
                        <input onInput = {this.inputUpdated} className="form-control" type="input" id="zipcode" name="zipcode" value={this.state.zipcode} required/>
                        <button type="submit" className="btn btn-success">Get The Forcast!</button>
                    </div>
                </form>
            </div>
        );
    }



    inputUpdated(e)
    {
        const zip = e.target.value;
        this.setState(
        {
            zipcode: zip,
        })
    }



    submitZipCode(e)
    {
        e.preventDefault();
        const {zipcode} = this.state;
        const {submitZip} = this.props; // submitZip from JSX event in App.js
        submitZip(zipcode);
        this.setState(
        {
            zipcode: "",
        });
    }
}

export default ZipForm;