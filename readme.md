## Vue + Laravel + bulma 
### description
Quick app bootstrap project. This app has uses/contains:
- Vue
- Laravel
- Bulma
- webpack
- SASS
- dev and prod env (minified assets on prod)

### installation

I assume that php 7, node and other tools like curl is installed
```bash
git clone https://github.com/codecats/quick-app 
```
```bash
curl -s https://getcomposer.org/installer | php
```
```bash
cd quick-app
```
```bash
../composer.phar install
```
```bash
cp .env.example .env
```
```bash
mkdir public
```
```bash
cp example.htaccess public/.htaccess
```
```bash
cp index.php public/index.php
```
```bash
php artisan key:generate
```
```bash
cd resources/assets/
```
```bash
npm install
```


### run

resources/assets
```bash
npm run serve
```


### quick cheatsheet to solve some problems with env 

Installation request for danielstjules/stringy 1.10.0 -> satisfiable by danielstjules/stringy[1.10.0].
```bash
sudo apt-get install php7.0-mbstring
```
```bash
sudo apt-get install libapache2-mod-php7.0
```
