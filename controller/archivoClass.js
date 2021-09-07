const fs = require('fs');

class Archivo {

    constructor() {
        
        this.urlLocal = "./models/";
    };

    download = async( archivo , data ) => {

        const currentUrl = `${this.urlLocal}${archivo}.txt`;

        try {
            
            const readLocalFile = await fs.promises.readFile(currentUrl);
            const jsonFile = JSON.parse(readLocalFile.toString('utf-8'));

            jsonFile.push( { ...data, id: `${Date.now()}${jsonFile.length}` } );
        
            try {
                
                await fs.promises.writeFile( currentUrl, JSON.stringify( jsonFile, null, '\t' ) );

            } catch (error) {
                
                throw new Error(error)

            }

        } catch (error) {
            
            try {
                
                await fs.promises.writeFile( currentUrl, JSON.stringify( [ { ...data, id: `${Date.now()}0` } ] ) );

            } catch (error) {
                
                throw new Error(error)

            }  

        }

    }

};

module.exports = Archivo;