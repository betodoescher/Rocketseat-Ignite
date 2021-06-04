import { v4 as uuidV4 } from 'uuid';

class Category {
    id: String
    name: String
    description: String
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Category }