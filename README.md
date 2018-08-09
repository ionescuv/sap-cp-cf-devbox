# "SAP CP CF Local Test Environment"-as-Code

The `SAP CP CF DevBox` provides tools to enable local testing of applications designed for the SAP Cloud Platform Cloud Foundry environment.

Aim is to: 
* Have a centrally maintained test environment that can be shared among team members, eliminating "works on my machine" problems
* Minimize the effort to start-up the local test environment
* Enable Dev/Prod parity, by mimicking the application environment on Cloud Foundry

## Scope of this DevBox:
* Containerized backing services provided out-of-the-box:
  * Postgresql & pgAdmin DB client
  * RabbitMQ
  * Swagger UI
* Locally running Fiori Launchpad for providing:
  * Authentication handling, by reusing cloud UAA instances
  * reuse of existing Launchpad Tile Configuration, based on the SAP CP Portal Service
  * Provisioning of HTML5 content, either from cloud-based CDN or local environment
* Spring Cloud Contract WireMock instances for isolation testing of microservices [planned]
  
## Installation

### Containerized backing services

#### Prerequisites
The backing services are running in a Vagrant-based ubuntu VM. As a result [Vagrant](https://www.vagrantup.com) is a prerequisite, along with a suitable provider, like [VirtualBox](https://www.virtualbox.org)

#### Start
```
cd vm
vagrant up
```

As a result the following components are provisioned:
* Postgresql DB (accessible @ localhost:5432)
* Web-based DB client [pgAdmin](https://www.pgadmin.org/). Accessible @ [http://192.168.33.10]**
* RabbitMQ instance @ localhost:5672  
* RabbitMQ management dashboard. Accessible @ [http://192.168.33.10:15672]
* Swagger UI. Accessible @ [http://192.168.33.10:8080]**

`user/pass: admin/admin`

Enjoy!

### Locally running Fiori Launchpad

#### Prerequisites
* Node.JS locally installed

#### Configuration
Edit the following files:
* `runLocal\launchpad\env.json` - Provide values for environment variables for the process running the Launchpad
* `runLocal\launchpad\xs-app.json` - Configure details of the app-router, e.g. destinations

#### Start
```
npm install
npm run launchpad
```
