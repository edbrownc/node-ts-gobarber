import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    // const user = await this.ormRepository.findOne(id);
    // return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    // return this.ormRepository.findOne({ where: { email } });
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    // const user = this.ormRepository.create(userData);
    // await this.save(user);
    // return user;
  }

  public async save(user: User): Promise<User> {
    // return this.ormRepository.save(user);
  }
}

export default UsersRepository;
