# Car rent

## Rocketseat - Ignite

## Install and run in local
- `git clone https://github.com/betodoescher/Rocketseat-Ignite.git`
- `cd Rocketseat-Ignite`
- `npm install`
- `npm run dev`

## Install and run in docker
- `git clone https://github.com/betodoescher/Rocketseat-Ignite.git`
- `cd Rocketseat-Ignite`
- `docker-compose up` 
- `docker-compose up -d --build` # Executing in background, for view logs, execute next command
- `docker logs rentx -f`
- `docker-compose down` # Stop container

## Access documentation in Swagger
- `http://localhost:3333/api-docs`

## Create migration
- `typeorm migration:create -n CreateCategories`
### Run migrations
- `typeorm migration:run`
### Revert migrations
- `typeorm migration:revert`

## Run test
- ` `