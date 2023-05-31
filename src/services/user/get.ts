import { Service } from 'typedi';

import UserRepository from '../../repositories/user';

@Service()
class GetUser {
  constructor(public userRepository: UserRepository) {}

  public get() {
    return this.userRepository.get();
  }
}

export default GetUser;
