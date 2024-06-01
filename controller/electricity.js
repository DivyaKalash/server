const EleGen = require("../models/elegen");
const EleReq = require("../models/elereq");
const EleUsed = require("../models/eleUsed");

exports.elegen = (req, res)=>{
    const {electricityProduced, emission, date, weather, orgId, orgName} = req.body
    if(!electricityProduced || !emission || !date || !weather || !orgId || !orgName){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }

    var eleg = new EleGen(
        {
            electricityProduced, emission, date, weather, orgId, orgName
        }
    );

        eleg.save()
        .then(user=>{
            res.json({message: "Successfully submitted hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    }

const allElegens = (elegens) => {
    let elegenList = [];
    for(let elegen of elegens){
        elegenList.push(elegen);
    }
    return elegenList;
}
exports.getElegens = (req, res) =>{

    let elegenList = [];
    EleGen.find()
    .exec((error, elegen)=> {
        if(error) return res.status(400).json({error});
        if(elegen){
            return res.status(200).json({elegens: allElegens(elegen)});

        }
    })
}


exports.elereq = (req, res)=>{
    const {tokenRequested, pricePerToken, orgId, greenOrgId, orgName, greenOrgName} = req.body
    if(!tokenRequested || !pricePerToken || !greenOrgId || !greenOrgName || !orgId || !orgName){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }

    var eler = new EleReq(
        {
            tokenRequested, pricePerToken, orgId, greenOrgId, orgName, greenOrgName
        }
    );

        eler.save()
        .then(eler=>{
            res.json({message: "Successfully submitted hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    }

const allElereqs = (elereqs) => {
    let elereqList = [];
    for(let elereq of elereqs){
        elereqList.push(elereq);
    }
    return elereqList;
}
exports.getElereqs = (req, res) =>{

    EleReq.find()
    .exec((error, elereq)=> {
        if(error) return res.status(400).json({error});
        if(elereq){
            return res.status(200).json({elereqs: allElereqs(elereq)});

        }
    })
}


exports.eleused = (req, res)=>{
    const {electricityUsed, date, orgId, orgName} = req.body
    if(!electricityUsed || !date || !orgId || !orgName){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }

    var eleu = new EleUsed(
        {
            electricityUsed, date, orgId, orgName
        }
    );

        eleu.save()
        .then(eleu=>{
            res.json({message: "Successfully submitted hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    }

const allEleused = (eleused) => {
    let eleusedList = [];
    for(let eleuse of eleused){
        eleusedList.push(eleuse);
    }
    return eleusedList;
}
exports.getEleused = (req, res) =>{

    EleUsed.find()
    .exec((error, eleused)=> {
        if(error) return res.status(400).json({error});
        if(eleused){
            return res.status(200).json({eleused: allEleused(eleused)});

        }
    })
}

exports.updateEleReqStatus = (req, res) => {
    const {id, status} = req.body;
    EleReq.findByIdAndUpdate(id, {status: status})
    .then(elereq=>{
        res.json({message: "Successfully updated hurray!"})
    }).catch(err=>{
        console.log(err);
    })

}