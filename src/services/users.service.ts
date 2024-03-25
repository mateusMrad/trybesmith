import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { UserReturn } from '../types/User';

async function listUsers(): Promise<UserReturn> {
  const usersList = await UserModel.findAll({
    attributes: ['username'],
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });
  const user = usersList.map((u) => u.dataValues);
  const list = user.map((us) => ({
    username: us.username,
    productIds: us.productIds?.map((prod) => prod.id),
  }));
  return { status: 'SUCCESSFUL', data: list };
}

export default {
  listUsers,
};