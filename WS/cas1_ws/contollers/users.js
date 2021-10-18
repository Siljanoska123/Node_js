const User = require ('../models/user');




module.exports = {
//     postUser: async (req, res) => {
//         const {email, password} = req.body; 

//         try{
//              const user =  awaitUser.findOne({email});
//              if(user==null) 
//               return res.status(400).json({err : "User with email doesnot exists.Please signup"});
//        }
//         catch(error){
//               return res.status(500).json({err : error.message});
//             }
// }


    postUser: async(req, res) => {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email.toLoweCase(),
            password: req.body.password
        });
        res.send(user)
       
    },

    postLogIn: async(req,res) => {
        if (await User.findOne({email: req.body.email.toLowerCase(), password: req.body.password})){
            res.send("Welcome");
        } else{
            res.send("User with email doesnot exists.Please signup");
        }
    }
}