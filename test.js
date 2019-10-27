
const LightningClient = require('./index');

const dir = "/var/lib/docker/volumes/generated_clightning_bitcoin_datadir/_data"

const client = new LightningClient(dir)

client.getinfo()
    .then(info => console.log(info))
    .catch(err => console.log(err));
