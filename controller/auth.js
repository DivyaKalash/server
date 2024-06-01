const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const bcrypt = require("bcryptjs");


exports.signup = (req, res)=>{
    const {name, description, address, selType, email, password, contractAddress, role} = req.body
    if(!name || !email || !password || !address || !selType || !contractAddress || !role){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }
    User.findOne({email:email})
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:"Email already exist."})
        }
        bcrypt.hash(password,15)
        .then(hashedPassword=>{
            const user = new User({
                name:name,
                email:email,
                description: description,
                address:address,
                selType:selType,
                contractAddress:contractAddress,
                role: role,
                password:hashedPassword
            })
        user.save()
        .then(user=>{
            res.json({message: "Successfully Registerd hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    })
})
}

exports.signin = (req, res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }
    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser){
            return res.status(422).json({error: "Please provide valid credentials."})
        }
        bcrypt.compare(password,saveduser.password)
        .then(ismatch=>{
            if(!ismatch){
                return res.status(422).json({error: "Please provide valid credentials." })
            }
            else{
                const token = jwt.sign({_id:saveduser._id}, JWT_SECRET ,{ expiresIn: 434445 })
                res.cookie("token", token, {expiresIn: "1d"});
                const {_id,name,email, address, selType, contractAddress} = saveduser
                res.json({token:token, user:{_id,name,email,address,selType,contractAddress}})
                // res.json({message: "Successfully signedin 🙂."})

            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
}

exports.signout = (req, res) =>{
    res.clearCookie("token");
    res.status(200).json({
        message: "Signout successfully!"
    });
}

const allOrganizations = (orgs) => {
    let orgList = [];
    for(let org of orgs){
        orgList.push(org);
    }
    return orgList;
}
exports.getOrganizations = (req, res) =>{

    let orgList = [];
    User.find()
    .exec((error, org)=> {
        if(error) return res.status(400).json({error});
        if(org){
            return res.status(200).json({orgs: allOrganizations(org)});

        }
    })
}