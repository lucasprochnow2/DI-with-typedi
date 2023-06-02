import { Inject, Service } from 'typedi';

import UserRepository, { IUserRepository } from '../../repositories/user';

@Service()
class GetUser {
  constructor(
    @Inject(() => UserRepository)
    public userRepository: IUserRepository,
  ) {}

  public get() {
    return this.userRepository.get();
  }
}

export default GetUser;
