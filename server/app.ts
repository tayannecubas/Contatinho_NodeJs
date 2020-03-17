import * as  express from 'express';

class App{
    public app: express.Application;

    constructor() {
        this.app = express();
    } 

    routes(){
        this.app.route('/').get( (req,res) => res.status (200).json({"result": "Hello World"}) );
    } 
}

export default new App(); 