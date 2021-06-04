import { EspecificationsRepository } from '../api/repositories/EspecificationsRepository'
import { EspecificationService } from '../api/services/EspecificationService'
import { EspecificationsController } from '../api/controllers/EspecificationsController'

const especificationsRepository = EspecificationsRepository.getInstance()
const especificationService = new EspecificationService(especificationsRepository)
const especificationsController = new EspecificationsController(especificationService)

export { especificationsController }