Aim: Development Environment up-and-running with a single command

Scope of DevBox:
* Locally running Fiori Launchpad
  * OAuth-based authentication using cloud UAA
  * Reuse of existing Tile Configuration
  * Provisioning of HTML5 content, either from cloud-based CDN or local environment
* Spring Cloud Contract WireMock instance for isolation testing of microservices
  * configurable stub activation
  * always fetching latest contract versions
* Containerized backing services:
  * Postgresql
  * RabbitMQ
  * ..

Technical Prerequisites:
- Node for Fiori Launchpad
- Vagrant (w. virtualbox)