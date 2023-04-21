import { Teacher } from '../database/models';

export const getUserByEmail = async (email) => {
  return await Teacher.findOne({ where: { email: email } });
};
export const getUserById=async(userId)=>{
    return await Teacher.findOne({where:{id:userId}});
}