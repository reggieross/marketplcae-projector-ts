#!/usr/bin/env bash

docker-compose down -v --remove-orphans

docker-compose build;
docker-compose up -d

echo -e "${YELLOW}Waiting on service to start up${NC}"
sleep 3

docker-compose run marketplace-projector-ts npm run test:integration

docker-compose down -v --remove-orphans

exit 0;

