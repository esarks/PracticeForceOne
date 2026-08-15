---
title: "MarketSlick"
---

# Architects Companion (JAC)
## Rapid Application Development for Enterprise Java

---

## The Power of Code Generation Meets Modern Architecture

**Architects Companion** (JAC) is a sophisticated Java-based rapid application development framework that transforms how enterprise applications are built. By combining powerful XML-driven code generation with dynamic compilation, JAC enables developers to create production-ready applications in a fraction of the time required by traditional development approaches.

---

## Case Study: AllowanceAlley

### From Concept to Cross-Platform in Record Time

**AllowanceAlley** is a family chore and rewards management application that demonstrates the full power of the JAC architecture. Originally designed as an iOS application with a cloud backend, AllowanceAlley was completely redeveloped using JAC to create a modern 3-tier architecture with remarkable results:

#### The Challenge
- Migrate from iOS/Supabase to a portable, self-hosted solution
- Maintain full feature parity with the original application
- Enable both web and mobile clients from a single backend
- Ensure enterprise-grade security and scalability

#### The Solution
Using JAC's code generation and MIC (Model-Interface-Controller) architecture:

- **11 database entities** with complete CRUD operations generated automatically
- **RESTful API** with 25+ endpoints serving both web and iOS clients
- **JWT authentication** supporting parent and child user roles
- **Real-time photo uploads** via S3-compatible storage integration
- **Docker-ready deployment** with PostgreSQL and MinIO

#### The Result
A fully functional backend was developed and tested, enabling the original iOS application to connect seamlessly to the new JAC-powered infrastructure. The same API now serves a responsive web application, demonstrating true cross-platform capability from a single codebase.

> *"What would have taken months with traditional development was accomplished in weeks. The iOS app connected to our new backend with minimal changes to the client code."*

---

## JAC Framework Features

### Code Generation Engine

| Feature | Description |
|---------|-------------|
| **XML-Driven Templates** | Define data models once in XML, generate Java classes automatically |
| **CRUD Auto-Generation** | Complete Create, Read, Update, Delete operations for every entity |
| **Schema Validation** | Built-in XML schema validation ensures data integrity |
| **Incremental Compilation** | Only regenerate what changes - preserves custom code sections |
| **Multi-Database Support** | PostgreSQL, MySQL, Oracle, SQL Server out of the box |

### Dynamic Compilation

| Feature | Description |
|---------|-------------|
| **Hot Reload** | Modify scripts and see changes without server restart |
| **Mixed Syntax** | Seamlessly blend Java code with template directives |
| **Runtime Class Loading** | Dynamically compile and load classes at runtime |
| **Script-to-Bytecode** | Full Java compilation pipeline, not interpreted scripts |

### Enterprise Integration

| Feature | Description |
|---------|-------------|
| **Embedded Jetty Server** | Production-grade HTTP server included |
| **Connection Pooling** | Built-in database connection management |
| **S3/Cloud Storage** | Native integration with AWS S3, Google Cloud, MinIO |
| **SMTP Email Service** | Send transactional emails without external dependencies |
| **JWT Authentication** | Secure stateless authentication built-in |

### Developer Experience

| Feature | Description |
|---------|-------------|
| **Properties.xml Configuration** | Centralized configuration management |
| **Structured Logging** | Request tracking with unique IDs and timing |
| **Rate Limiting** | Built-in API protection against abuse |
| **Docker Support** | Container-ready deployment with compose files |

---

## Architecture Benefits

### Speed to Market

```
Traditional Development          JAC Development
─────────────────────────────    ─────────────────────────────
Define database schema           Define XML data model
Write entity classes             [GENERATED]
Write repository layer           [GENERATED]
Write CRUD operations            [GENERATED]
Write API endpoints              Write API endpoints (scripted)
Write validation logic           Validation in schema
Test & debug                     Test & debug
─────────────────────────────
Weeks to months                  Days to weeks
```

**Reduction in boilerplate code: 70-80%**

### Maintainability

- **Single Source of Truth**: Data models defined once in XML
- **Consistent Patterns**: Generated code follows established conventions
- **Preserved Customization**: Custom code sections survive regeneration
- **Version Control Friendly**: Text-based scripts and XML diff cleanly

### Flexibility

- **Any Frontend**: REST API serves web, mobile, desktop clients equally
- **Database Portable**: Switch databases by changing configuration
- **Cloud Agnostic**: Deploy on-premise, AWS, GCP, or Azure
- **Incremental Adoption**: Use JAC for new features alongside existing code

### Reliability

- **Compiled Java**: Full type safety, not interpreted scripts
- **Proven Libraries**: Built on Jetty, Apache Commons, standard JDBC
- **Transaction Support**: Database transactions handled automatically
- **Error Handling**: Consistent exception patterns across generated code

---

## Technical Specifications

### Platform Requirements

| Component | Requirement |
|-----------|-------------|
| **Java** | JDK 17+ (JDK 24 bundled with JAC2024) |
| **Database** | PostgreSQL 14+, MySQL 8+, Oracle 19c+, SQL Server 2019+ |
| **Memory** | 512MB minimum, 2GB recommended |
| **Storage** | 100MB for JAC runtime + application code |

### Included Libraries

- **Web Server**: Eclipse Jetty 12
- **XML Processing**: Apache Xerces, Xalan
- **Database**: PostgreSQL, MySQL, Oracle, SQL Server JDBC drivers
- **Utilities**: Apache Commons (IO, Lang, Codec)
- **Logging**: Log4j 2
- **JSON**: Native parsing and generation

### Deployment Options

| Option | Description |
|--------|-------------|
| **Standalone** | Run directly with bundled JDK |
| **Docker** | Pre-configured Dockerfile and compose files |
| **Kubernetes** | Helm charts available for orchestration |
| **Cloud PaaS** | Deploy to AWS ECS, Google Cloud Run, Azure Container Apps |

---

## The JAC Advantage

### Before JAC
```
Developer writes:
  - Entity classes (100+ lines each)
  - Repository interfaces
  - Repository implementations
  - Service layer
  - Controller layer
  - DTO mappings
  - Validation logic
  - Database migrations

Total: 500-1000+ lines per entity
Time: 1-2 days per entity
```

### After JAC
```
Developer defines:
  - XML data model (20-50 lines)
  - Business logic scripts (as needed)

JAC generates:
  - Entity classes
  - CRUD operations
  - Database schema
  - Validation

Total: 50-100 lines per entity
Time: 1-2 hours per entity
```

---

## Success Metrics: AllowanceAlley

| Metric | Value |
|--------|-------|
| **Database Entities** | 11 tables with full CRUD |
| **API Endpoints** | 25+ REST endpoints |
| **Lines of Generated Code** | 15,000+ |
| **Lines of Custom Code** | 3,000 |
| **Development Time** | Weeks vs. projected months |
| **Platforms Served** | Web + iOS from single backend |
| **Deployment Size** | 50MB Docker image |

---

## Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/architectscompanion/jac2024.git

# Navigate to your application
cd jac2024/app/com/yourapp

# Define your data model
edit data/YourAppDdl.xml

# Generate code
../../../jacBuild24/bin/jac.bat GenerateAll.jrun

# Start your server
../../../jacBuild24/bin/jac.bat server/YourAppServer.script
```

### Project Structure

```
yourapp/
├── data/                    # Data model definitions
│   ├── YourAppDdl.xml      # Entity definitions
│   └── *.script            # Generated CRUD classes
├── server/                  # API server
│   └── YourAppRouter.script
├── config/
│   └── properties/
│       └── Properties.xml  # Configuration
└── docker/                  # Container deployment
    ├── Dockerfile
    └── docker-compose.yml
```

---

## Why Choose Architects Companion?

### For Architects
- Define clean data models in XML
- Enforce consistent patterns across teams
- Reduce code review burden with generated code
- Focus on architecture, not boilerplate

### For Developers
- Write business logic, not CRUD operations
- Hot reload during development
- Familiar Java syntax with template power
- Comprehensive library support

### For Operations
- Docker-native deployment
- Environment-based configuration
- Structured logging and monitoring
- Horizontal scaling ready

### For Business
- Faster time to market
- Reduced development costs
- Lower maintenance burden
- Platform flexibility

---

## Contact & Resources

- **Documentation**: [ArchitectsCompanion Wiki](https://github.com/architectscompanion/jac2024/wiki)
- **Examples**: `jac2024/app/com/examples/`
- **Support**: architects@esarks.com

---

*Architects Companion - Because enterprise development should be fast, not frustrating.*

---

**Version**: JAC 2024
**License**: Licensed to Architects of Software Design, Corp.
