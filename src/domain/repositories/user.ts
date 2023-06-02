import { Service } from 'typedi';

type User = {
  name: string;
  motherName: string;
};

export interface IUserRepository {
  get(): User;
}

@Service()
class UserRepository implements IUserRepository {
  public get() {
    return {
      name: 'user name repo',
      motherName: 'mother user name repo',
    };
  }
}

export default UserRepository;
