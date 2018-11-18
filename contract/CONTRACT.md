# Smart Contract API

## Testing

1. Setup Docker

```bash
# Get docker image
docker pull eosio/eos

# Run a node (nodeos)
docker run \
  --name nodeos -d -p 8888:8888 \
  --network eosdev \
  -v /tmp/eosio/work:/work \
  -v /tmp/eosio/data:/mnt/dev/data \
  -v /tmp/eosio/config:/mnt/dev/config \
  eosio/eos-dev \
/bin/bash -c \
  "nodeos -e -p eosio \
    --plugin eosio::producer_plugin \
    --plugin eosio::history_plugin \
    --plugin eosio::chain_api_plugin \
    --plugin eosio::history_api_plugin \
    --plugin eosio::http_plugin \
    -d /mnt/dev/data \
    --config-dir /mnt/dev/config \
    --http-server-address=0.0.0.0:8888 \
    --access-control-allow-origin=* \
    --contracts-console"

# Run wallet and keystore
docker run -d --name keosd --network=eosdev \
-i eosio/eos-dev /bin/bash -c "keosd --http-server-address=0.0.0.0:9876"
```

2. Setup alias for cleos and eosiocpp

```bash
alias cleos='docker exec -it nodeos /opt/eosio/bin/cleos --url http://127.0.0.1:8888 --wallet-url http://[keosd_ip]:9876

alias eosiocpp='docker exec -it nodeos /opt/eosio/bin/eosiocpp'
```

3. Compile the contract

## Cleaning up

```bash
# Remove all docker containers
docker rm $(docker ps -a -q)
```


