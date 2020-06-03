import React, {Component} from "react"

class NameForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            Fname: "zhongcai",
            Lname: "jiang",
        }
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value})
    }
    handleSubmit = (event) => {
      event.preventDefault();
      //this.props.onSubmit(this.state.Lname);
       this.setState({
        Fname:event.target.firstname.value,
        Lname:event.target.lastname.value
      })
    };
    render() {
        return (
          <>
          
            <div>Lastname: {this.state.Lname}</div>
            <div>Firstname: {this.state.Fname}</div>
            <button >edit</button>
          <form onSubmit={this.handleSubmit}>
             <input
               type="text"
               name="lastname"
               onChange={this.handleChange}
              // value={this.state.Lname}
             >

             </input>
          
             <input
             type="text"
             name="firstname"
              onChange={this.handleChange}
              //value={this.state.Fname}
             >

           </input>

         
           </form>
          </>
        );
      }
    
}
export default NameForm;