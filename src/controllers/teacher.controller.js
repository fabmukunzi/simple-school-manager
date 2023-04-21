import { getUserByEmail, getUserById } from '../services/teacher.service';

export const login = async (req, res) => {
  try {
    const { email, password:userpassword } = req.body;
    const {id,names,password}= await getUserByEmail(email);
    const user={id,names};
    if(userpassword!==password)
    return res.status(401).json({message:'Invalid password'});
    return res.status(200).json({message:'Login success',user:user});
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getSubjects=async(req,res)=>{
    try {
        const {subjects}=await getUserById(req.params.userId);
        return res.status(200).json({subjects:subjects});
    } catch (error) {
        return res.status(500).json({message:'Error while fetching subjects'})
    }
}
