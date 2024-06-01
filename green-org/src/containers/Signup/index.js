import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";
import { Navigate } from "react-router-dom";

import "./style.css";
const Signup = (props) => {
    const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selType, setSelType] = useState("");
  const [address, setAddress] = useState("");
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "organization";
  const dispatch = useDispatch();

  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }

  if (user.loading) {
    return <p>Loading...</p>;
  }
//   const signup = async() => {
//     let response = () => {
//       return new Promise(function(resolve, reject) {
//         fetch('http://localhost:6000/signup', {
//           params: {
//             name, description, selType, address, email,contractAddress: "fghwefdhj", role, password
//           }
//         }).then(response => {
//           resolve(response);
//         });
//       });
//     };
//     let responseData = await response();
//     console.log(responseData.data);
//   }

  const userSignup = async(e) => {
      e.preventDefault();
    // const accounts = await web3.eth.getAccounts();
    // await factory.methods.createOrg("1000")
    //                     .send({
    //                         from: accounts[0]
    //                     }) 
    // const contractAddress = await factory.methods.newContract().call();
    // console.log(contractAddress);
    const user = { name, description, selType, address, email,contractAddress: "fghwefdhj", role, password };
    
    dispatch(signup(user));
  };
    return (
        <div>
            <section>
        <div class="contentbx">
            <div class="formbx">
                <h2>Organization Sign Up </h2>
                {/* <form onSubmit={{userSignup}}> */}
                    <div class="inputbx">
                        <span>Organization name</span>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div class="inputbx">
                        <span>Organization description</span>
                        <input type="textarea" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    </div>
                    <div class="inputbx">
                        <span>Organization Sector</span>
                        <select value={selType} onChange={(e) => setSelType(e.target.value)} >
                          <option>Hydro power plant</option>
                          <option>Wind power plant</option>
                          
                        </select>
                    </div>
                    <div class="inputbx">
                        <span>Oraganization Address</span>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div class="inputbx">
                        <span>Email Address</span>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="inputbx">
                        <span>Password</span>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="inputbx">
                        <span>Confirm Password</span>
                        <input type="password"/>
                    </div> 
                    <div class="inputbx">
                        <input type="submit" value="Register"name="" onClick={userSignup}/>
                        
                    </div>
                {/* </form> */}
            </div>
        </div>
    </section>
            </div>
    )
}

export default Signup;