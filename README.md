## Setup application

- Run `docker-compose up -d --build`

- Run this command
```bash
docker-compose exec app cp .env.example .env && \
docker-compose exec app php artisan key:generate && \ 
docker-compose exec app php artisan cache:clear && \
docker-compose exec app php artisan migrate
```
- Visit [http://locahost:3000](http://localhost:3000)