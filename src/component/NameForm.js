import React, {Component} from "react"

class NameForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            Fname: "",
            Lname: "",
        }
    }
    handleEditNames=(name)=>{
        this.setState({name:name.target.value})
    }
    handleSubmit
    render(){
        return (
            <h1>User's Name</>
            <form on Submit={this.handleSubmit}>
                <input
                    type="text"
                    Fname="lastname"
                    onChange={this.handleEditNames}
                    >
                </input>
            </form>
            <button>Add First Name</button>
            <form on Submit={this.handleSubmit}>
                <input
                    type="text"
                    Lname="lastname"
                    onChange={this.Lname.handleEditNames}
                    >
                </input>
            </form>
            <button>Add Last Name</button>
            // <div>{this.props.first}</div>
            // <div>{this.props.last}</div>
            // <NamesForm onSubmit="this.handleEditNames"/>
        )        
    }
}
export default NameForm;