const os = require('os');

let obj = {
    tempDirectory : os.tmpdir(),
    endianness : os.endianness(),
    hostName : os.hostname(),
    type : os.type(),
    platform : os.platform(),
    arch : os.arch(),
    memory : os.totalmem(),
    freeMemory : os.freemem(),
    networks : os.networkInterfaces(),

    OS_Details(){
        return `This PC is of type ${this.type}
        with O.S. platform ${this.platform} and host ${this.hostName}.
        This is PC having FUll-Memory ${this.memory} and free Memory ${this.freeMemory}.
        Total spec are ${this.arch}.The directory location of tem file  is ${this.tempDirectory}
        and endianess ${this.endianness} . The Networks Connectivity with this P.C. are ${this.networks}.`
    }
}

console.log(obj);