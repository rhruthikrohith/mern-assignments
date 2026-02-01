        import exp from 'express'
        //create mnini express application
        
        export const userapp=exp.Router()
        let users=[]

        // get req handling route (read users)
userapp.get('/users',(req,res)=>{
            // send res to json 
            res.status(201).json({message:"all users",users})
        });
        // get req handling route (create users)
userapp.post('/user',(req,res)=>{
            // send res to json
            let newUser=req.body
            users.push(newUser)
            res.status(201).json({message:"newUser created",users})

        })
        // get req handling route (update users)
userapp.put('/users',(req,res)=>{
    //get modified user from client
    let modifieduser=req.body
    console.log(modifieduser)
    //find the user with id exists in array
    let userindex=users.findIndex(userObj=>userObj.id===modifieduser.id)
    if(userindex===-1){
       return  res.status(404).json({message:"user not found"})
    }
    let updateduser=users.splice(userindex,1,modifieduser);
    //if user not found,send res as "user not found"
    //if user found,then modify the user we use splice here
    //send res as "user modified"
res.status(200).json({message:"newUser modified"})
        })

        //read user by id
userapp.get('/users/:id',(req,res)=>{

              let userid=Number(req.params.id)
              //READ ID
              let user=users.find(userObj=>userObj.id===userid)
              if(!user){
                return res.status(404).json({message:"user not found"})
              }
              //send res
              return res.status(200).json({message:"user",users})
            })
        // get req handling route (delete users)
        userapp.delete('/users/id:',(req,res)=>{
            let userid=Number(req.params.id)
            //read index
            let usersindex=users.findIndex(user=>user.id==userid)
            if(usersindex==-1)
                return res.status(404).json({message:"user not found",users})
            users.splice(userindex,1)
            return res.status(200).json({message:"user is deleted",users})
            
            // delete res to json
            
        })