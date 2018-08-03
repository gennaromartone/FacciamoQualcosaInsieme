import * as argon2 from "argon2themax";

let options = null;

export const get = async () => {
    try{
         options = await argon2.getMaxOptions();
    }
    catch(err){
        console.log('ERRORE in argon2.getMaxOptions(): ',err);
    }    
}

export default options;