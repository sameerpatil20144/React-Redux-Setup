import React, { Component } from 'react';
import { BrowserRouter as  Router} from 'react-router-dom';
import "../styles/login.css";
import { sampleAPI } from "../actions/sampleActions";
import { connect } from "react-redux";

class Login extends Component{
    componentDidMount(){
        // dispatching actions in componentDidMount(calling sampleAPI function in CDM)
         this.props.sampleAPI();
    }
    render(){
        // console.log('Props: ',this.props.items)
           return(
            <Router>
                <div>
                <div>
                    <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Website</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.items.map(property => 
                                    <tr>
                                        <td className="ChangeText_color">
                                            {property.website}
                                        </td>
                                        <td className="ChangeText_color">
                                            {property.username}
                                        </td>
                                        <td className="ChangeText_color">
                                            {property.email}   
                                        </td>
                                        <td className="ChangeText_color">
                                            {property.address.city}   
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </Router>
        );

    
        
    }
}

const mapStateToProps = state => ({
    items:state.sampleReducer.items,
}); 
export default connect(
    mapStateToProps,{sampleAPI})(Login);