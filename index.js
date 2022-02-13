const axios = require('axios').default;

async function resolveAddress(address) {
    let name = await axios.get("https://api.wnsdomains.io/resolve/address=" + address);
    return name.data.value;
}

async function resolveName(name) {
    let address = await axios.get("https://api.wnsdomains.io/resolve/name=" + name);
    return address.data.value;
}

async function resolveNameAll(names) {
    let allnames = names.join("&");
    let address = await axios.get("https://api.wnsdomains.io/resolve/name=" + allnames);
    return address.data.value;
}

async function resolveAddressAll(address) {
    let alladdresses = address.join("&");
    let names = await axios.get("https://api.wnsdomains.io/resolve/address=" + alladdresses);
    return names.data.value;
}

module.exports = { resolveAddress, resolveName, resolveAddressAll, resolveNameAll };
