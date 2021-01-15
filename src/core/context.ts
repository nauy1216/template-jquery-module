interface Components {
    [key: string]: object
}
export class Context {
    public components: Components
    constructor() {
        this.components = Object.create(null)
    }

    init() {

    }
}