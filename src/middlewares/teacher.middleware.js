import { Teacher } from '../database/models';

export const checkIfTeacherBelongsToSubject = async(req, res,next) => {
  const { teacherId,subject } = req.body;
  const teacher = teacherId?await Teacher.findOne({ where: { id: teacherId } }):null;
  if (teacher) {
    console.log(subject)
    const result=teacher.subjects.find((s)=>s==subject)
    console.log(result)
    if(result)
    next();
    else
    return res.status(403).json({message:'You are not allowed'})
  }else
  return res.status(401).json({message:'You are not loggedin'})
};
