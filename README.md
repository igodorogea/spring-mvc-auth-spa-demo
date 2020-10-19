# Demo project Spring MVC 

### BE development flow

1. Go to `frontend` dir and build maven project - `mvn clean install`
2. Go to `backend` dir and start spring boot - `mvn clean tomcat7:run`
3. Go to http://localhost:8080/
4. Credentials - `user/password`

### FE development flow with local BE

1. Go to `frontend` dir and build maven project - `mvn clean install`
2. Go to `backend` dir and start spring boot - `mvn clean tomcat7:run`
3. Go to `frontend` dir and build maven project - `npm start`
4. Go to http://localhost:4200/
5. Credentials - `user/password`

### FE development flow with external BE

1. Go to `frontend` dir and edit `proxy.conf.js` - update `remoteDomain` to with BE external URL
2. Go to `frontend` dir and install project dependencies - `npm install`
3. Go to `frontend` dir and start dev server - `npm start`
4. Go to http://localhost:4200/spa/
5. Credentials - `user/password`
