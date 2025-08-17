
### **client-ui/**
Frontend React application for visualizing the universe map, anomalies, and cosmic structures.  
- `src/`: Main source code, including views (e.g., `UniverseMap.jsx`), components, and GraphQL queries.

### **content-processor/**
Python backend for data ingestion, anomaly detection, and GraphQL API.
- `main.py`: Entry point for processing.
- `db/`: MongoDB integration.
- `graphql/`: GraphQL schema, queries, and mutations.
- `ingestion/`: Loaders and schedulers for data import (e.g., AnomalyMatch, MAST).
- `models/`: Data models (e.g., universe entities).
- `seed/`: Example seed data for anomalies.

### **shared/**
Reference files and schemas for interoperability.
- `schema-reference.graphql`: GraphQL schema reference.

### **universe-api/**
Java backend (Spring/Gradle) for universe data services and API endpoints.

### **docker-compose.yml**
Container orchestration for running all services together.

---

## Universal Mapping Template

A consistent system for naming and classifying cosmic entities:

| Level | Entity                  | Naming Convention         | Example                    |
|-------|-------------------------|---------------------------|----------------------------|
| 0     | Universe Instance       | UNI-<epoch>               | UNI-ΛCDM-13.8BY            |
| 1     | Cosmic Sector (Region)  | SEC-<Supercluster>        | SEC-Laniakea               |
| 2     | Gravitational Node      | NODE-<X:RA_Y:Dec>         | NODE-X13.6-Y57.2           |
| 3     | Galaxy Group            | GRP-<Cluster>-<Member#>   | GRP-Virgo-003              |
| 4     | Galaxy                  | GAL-<Coords|ID>           | GAL-Elliptical-RA185.6_DEC-12.9 |
| 5     | Anomalous Object        | ANO-<Class>-<Hash>        | ANO-Jelly-EA71X2           |
| 6     | Substructure            | SUB-<Type>-<HostID>       | SUB-PN-GAL-Spiral-RA124.8_DEC+62.2 |

See full schema and examples below.

---

## Output Formats

- GeoJSON/TopoJSON for cosmic cartography
- YAML/JSON-LD for semantic data
- SQL-compatible tables for catalog search

## Applications

- Astrophysical simulations
- Telescope planning
- 3D spatial visualization
- Knowledge graphs

---

For more details, see the code in each directory and the [schema-reference.graphql](shared/schema-reference.graphql)
