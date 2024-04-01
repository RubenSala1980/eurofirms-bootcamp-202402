class Form extends Component {
    constructor(){
        super('form')
    }


    onsubmit(callback) {
        this.CSSContainerRule.onsubmit = callback 

    }

    reset() {
        this.container.reset()
    }

}