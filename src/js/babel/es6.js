class BaseElem {
    constructor() {
        this.name = 'Base';
    }
}

class MainElem extends BaseElem {

    constructor(name) {
        super(name);
    }
    show(){
        console.log(this.name)
        document.querySelector(this.name).style.display = 'block'
    }

}

var logger = new MainElem('.es6');
logger.show();

