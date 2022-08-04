

# WNS Resolver Library

The "WNS Resolver Library" is a npm package that can be installed and used in conjunction with various other JavaScript libraries. 

The npm package can be found at [https://www.npmjs.com/package/wns-resolver](https://www.npmjs.com/package/wns-resolver)

### 

## Installing the npm package

The npm package can be installed using the following command:

    npm i wns-resolver

### 

## Importing the package

    var wnsResolver = require('wns-resolver');

### 

## Resolving WNS domains and addresses

**1. resolveName() :** This function can be used to resolve a domain name to the Ethereum address associated with it. Requires a string as the parameter.


    var wnsResolver = require('wns-resolver');
    
    let nameToFind = "enter-your-name-here";
    let result = await wnsResolver.resolveName(nameToFind);


###
**2. resolveAddress() :** This function can be used to resolve an Ethereum address to the primary name associated with it. Requires a string as the parameter.


    var wnsResolver = require('wns-resolver');
    
    let addressToFind = "enter-your-address-here";
    let result = await wnsResolver.resolveAddress(addressToFind);

###
**3. resolveNameAll() :** This function can be used to resolve multiple domain names to the Ethereum addresses associated with it. Requires an array as the parameter.



    var wnsResolver = require('wns-resolver');
    
    let allNamesToFind = ["name1", "name2", "name3"]
    let result = await wnsResolver.resolveNameAll(allNamesToFind );
###
**3. resolveAddressAll() :** This function can be used to resolve multiple Ethereum addresses to the primary names associated with it. Requires an array as the parameter.


    var wnsResolver = require('wns-resolver');
    
    let allAddressesToFind = ["address1", "address2", "address3"]
    let result = await wnsResolver.resolveAddressAll(allAddressesToFind);



