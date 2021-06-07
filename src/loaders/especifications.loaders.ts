import { EspecificationsRepository } from '../api/repositories/EspecificationsRepository'
import { EspecificationService } from '../api/services/EspecificationService'
import { EspecificationsController } from '../api/controllers/EspecificationsController'


export default (): EspecificationsController => {

    const especificationsRepository = new EspecificationsRepository()
    const especificationService = new EspecificationService(especificationsRepository)
    const especificationsController = new EspecificationsController(especificationService)

    return especificationsController
}