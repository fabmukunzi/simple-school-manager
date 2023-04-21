import { Teacher,Subject } from '../database/models';

export const getUserByEmail = async (email) => {
  return await Teacher.findOne({ where: { email: email } });
};
export const getAllSubjects=async()=>{
    return await Subject.findAll();
}