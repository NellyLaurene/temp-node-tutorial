// MODULES
    // Modules - Encapsulated code (only share minimum)
    // Every file in node is a module by default

    const name = require('./4-names');
    const sayHi = require('./5-utils');
    const data = require('./6-alternative-flavor')
    
    require('./7-mind-grenade');
    
    sayHi('susan');
    sayHi(name.john);
    sayHi(name.peter);