const apprenant = require('../models/apprenant');
const Apprenant = require('../models/apprenant');

// add an apprenant 

const addApp = async (req, res) => {
    try {
        const{name, email} = req.body;
        if(!name || !email){
            console.log('Missing required fields');
            return res.status(400).json({error: 'All fields are required'});
        }

        const apprenant = await Apprenant.create({
            name,
            email
        });
        console.log('apprenant created succesfully', apprenant._id);
        res.status(201).json({
            message: 'apprenant created successfuly',
            apprenant: apprenant
        })
    } catch (error) {
        console.log('error creating apprenant:', error);
        res.status(500).json({error: error.message});
    }
    
}

// get all apprenants
const getAllApp = async(req, res) => {

  try {
    const apprenant = await Apprenant.find();
    res.json(apprenant);    
  } catch (error) {
     res.status(500).json({ message: 'error in getting  apprenent', error: error.message });
  } 
}

//assigne le breif au 




//update  apprenant
const updateApp = async(req, res) => {
  try {
    const apprenant = await Apprenant.findById(req.params.id);
    if(!apprenant){
      return res.status(404).json({message: 'apprenant not found'});
    }

    const { name, email } = req.body;
    
    if (name) apprenant.name = name;
    if (email) apprenant.email = email;
 

    await apprenant.save();

    res.json({
      message: 'Apprenant updated successfully',
      apprenant: apprenant
    });
    
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({message: 'error update apprenant', error: error.message }) 
  }
}

// delete apprenant 
const deleteApp = async(req, res) => {
  try {
    const apprenant = await Apprenant.findByIdAndDelete(req.params.id);

    if(!apprenant){
      return res.status(404).json({message: 'apprenant not found'});
    }
   
     res.status(200).json({ message: 'apprenant deleted successfully' });
  } catch (error) {
    res.status(500).json({message: 'error in delete this skill'})
    
  }
}
module.exports = {addApp, getAllApp, updateApp, deleteApp};