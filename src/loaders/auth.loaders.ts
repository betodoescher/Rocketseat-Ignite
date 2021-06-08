import { UsersRepository } from '../api/repositories/UsersRepository'
import { AuthService } from '../api/services/AuthService'
import { AuthController } from '../api/controllers/AuthController'


export default (): AuthController => {

    const usersRepository = new UsersRepository()
    const authService = new AuthService(usersRepository)
    const authController = new AuthController(authService)

    return authController
}