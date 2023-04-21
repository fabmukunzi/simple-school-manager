import {Subject,Classes,Student,Score,Work} from '../database/models';
import { getAllSubjects, getUserByEmail} from '../services/teacher.service';

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
        const subjects=await Subject.findAll();;
        return res.status(200).json({subjects:subjects});
    } catch (error) {
        return res.status(500).json({message:'Error while fetching subjects',error:error})
    }
}

export const getClasses=async(req,res)=>{
  try {
    const classes=await Classes.findAll();
    return res.status(200).json({classes:classes});
  } catch (error) {
    return res.status(500).json({message:'Error while fetching classes',error:error})
  }
}
export const getStudents=async(req,res)=>{
  const classe=req.params.classId
  try {
    const students=await Student.findAll({where:{classe:classe}});
    return res.status(200).json({students:students});
  } catch (error) {
    return res.status(500).json({message:'Error while fetching students',error:error})
  }
}

export const getScores=async(req,res)=>{
  const {subject,student}=req.query;
  try {
    const scores=await Score.findAll({where:{student:student}});
    return res.status(200).json({scores:scores});
  } catch (error) {
    return res.status(500).json({message:'Error while fetching scores',error:error})
  }
}

export const getWorks=async(req,res)=>{
  try {
    const works=await Work.findAll();
    return res.status(200).json({works:works});
  } catch (error) {
    return res.status(500).json({message:'Error while fetching works',error:error})
  }
}