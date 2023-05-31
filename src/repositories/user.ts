import { Service } from 'typedi';

@Service()
class UserRepository {
  public get() {
    return {
      name: 'user name repo',
      motherName: 'mother user name repo',
    };
  }
}

export default UserRepository;
