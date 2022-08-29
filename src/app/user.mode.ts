export class User{

    constructor(public firstName?:string,
        public email?:string,
        public mobile?:string,
        public password?:string){

        }
}

export class loginUser{
    constructor(public email?:string,
        public password?:string){
            
        }
}