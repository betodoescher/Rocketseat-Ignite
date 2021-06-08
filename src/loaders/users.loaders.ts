import { UsersRepository } from '../api/repositories/UsersRepository'
import { UserService } from '../api/services/UserService'
import { UsersController } from '../api/controllers/UsersController'


export default (): UsersController => {

    const usersRepository = new UsersRepository()
    const userService = new UserService(usersRepository)
    const usersController = new UsersController(userService)

    return usersController
}