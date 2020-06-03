import React, {Component} from "react"

class NameForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            Fname: "zhongcai",
            Lname: "jiang",
            show:false,
        }
    }
    // handleChange=(event)=>{
    //     this.setState({name:event.target.value})
    // }
    handleSubmit = (event) => {
    
      event.preventDefault();
      console.log("1212")
      //this.props.onSubmit(this.state.Lname);
       this.setState({
        Fname:event.target.firstname.value,
        Lname:event.target.lastname.value,
        show:false,
      })
      
    };
    showchange=() => {
      this.state.show?
      this.setState({show:false})
      :this.setState({show:true})
    };
    render() {
        return (
          <div>

            {
              this.state.show?
              (
                 <form onSubmit={this.handleSubmit}>
                 <div>Lastname</div>
                  <input
                    type="text"
                    name="lastname"
                  //onChange={this.handleChange}
                   // value={this.state.Lname}
                  >
                  </input>
                 <div>Firstname</div>
                  <input
                  type="text"
                  name="firstname"
                   //onChange={this.handleChange}
                   //value={this.state.Fname}
                  >
                </input>
                <button type="submit">save</button> 
                <button  onClick={this.showchange}>cancel</button>
                </form>
                        
              ):(
                <div>
                <div>Lastname: {this.state.Lname}</div>
                <div>Firstname: {this.state.Fname}</div>
                <button onClick={this.showchange}>edit</button>
                </div>
                
              )
 
            }
            
          </div>
        );
      }
    
}
export default NameForm;