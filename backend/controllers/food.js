import fs from 'fs'
import foodModel from '../models/foodM.js'
import loginModel from '../models/loginM.js'


//add food item

const addFood = async(req, res )=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:'Food Added'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

// All food list

 const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        console.error('Error retrieving foods:', error);
        res.status(500).json({ success: false, message: 'Error retrieving foods' });
    }
};

//remove the food item
 


// const removeFood = async(req,res)=>{
//     try{
//         const removeFood = await foodModel.findByIdAndDelete(req.params.id)
//         await loginModel.findByIdAndDelete(req.params.id)
//         res.status(200).json(" remove food Successfully")
  
//     }catch(err){
//        res.status(500).json({success: false, message: "Error removing food"})
//     }
//   }
const removeFood = async (req, res) => {
    try {
      const food = await loginModel.findById(req.params.id);
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
      
      // Assuming the image path is stored in a field called 'imagePath' in the food document
      const imagePath = food.imagePath;
  
      // Delete the food item from the database
      await foodModel.findByIdAndDelete(req.params.id);
      await loginModel.findByIdAndDelete(req.params.id);
  
      // Delete the image file
      fs.unlink(path.join(__dirname, imagePath), (err) => {
        if (err) {
          console.error("Error deleting image file:", err);
          return res.status(500).json({ success: false, message: "Error removing food image" });
        }
      });
  
      res.status(200).json("Removed food successfully");
    } catch (err) {
      console.error("Error removing food:", err);
      res.status(500).json({ success: false, message: "Error removing food" });
    }
  };



export { addFood , listFood , removeFood}