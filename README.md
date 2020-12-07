# Setup application

#### Docker
- Run `docker-compose up -d --build`

- Run this command
```bash
docker-compose exec app cp .env.example .env && \
docker-compose exec app php artisan key:generate && \ 
docker-compose exec app php artisan cache:clear && \
docker-compose exec app php artisan migrate
```
- Visit [http://locahost:3000](http://localhost:3000)

#### Without docker

- Run `cp .env.example .env`

- Create database table in mysql

- Fill database env variables in `.env` file

- Run 
```bash
php artisan key:generate && \
php artisan cache:clear && \
php artisan migrate && \
npm run build
```

- Run `php artisan serve` and visit [http://locahost:3000](http://localhost:3000)