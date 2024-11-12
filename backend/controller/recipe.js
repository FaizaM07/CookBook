const Recipes=require("../models/recipe")


const getRecipes =async(req,res) => {
    const recipes=await Recipes.find()
     return res.json(recipes)
};

const getRecipe = async(req, res) => {
    const recipe=await Recipes.findById(req.params.id)
     return res.json(recipe)
};

const addRecipe =async(req, res) => {
    const {title , ingredients , instructions ,time  }=req.body

        if(!title ||  !ingredients || !instructions )
        {

            res.json({message:"Required fields can not be empty"})
        }
        const newRecipe=await Recipes.create({
            title , ingredients , instructions ,time

        })

        return res.json(newRecipe)
};


const editRecipe = async(req, res) => {
    const {title , ingredients , instructions ,time  }=req.body
    let recipe=await Recipes.findById(req.params.id)
    try{

        if(recipe){

            await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
           res.json({title , ingredients , instructions ,time })
    
         }

    }

    catch(err){
    return res.status(404).json({message:"error"})

    }

};


const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(204).json({ message: "Recipe deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting recipe", error: err });
    }
};



module.exports = { getRecipes , getRecipe , addRecipe , editRecipe ,deleteRecipe  };
