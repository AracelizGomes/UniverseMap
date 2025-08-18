/* global use, db */

// Select the database to use.
use('UniverseMapDB');

// Insert example Universe document
db.getCollection('universes').insertOne({
  id: 'UNI-LCDM-13.8BY',
  epoch: 'ΛCDM-13.8BY',
  sectors: ['SEC-Laniakea']
});

// Insert example Sector document
db.getCollection('sectors').insertOne({
  id: 'SEC-Laniakea',
  name: 'Laniakea',
  supercluster: 'Laniakea',
  nodes: ['NODE-X13.6-Y57.2']
});

// Insert example Node document
db.getCollection('nodes').insertOne({
  id: 'NODE-X13.6-Y57.2',
  ra: 13.6,
  dec: 57.2,
  galaxies: ['GAL-Elliptical-RA185.6_DEC-12.9'],
  groups: ['GRP-Virgo-003']
});

// Insert example Galaxy document
db.getCollection('galaxies').insertOne({
  id: 'GAL-Elliptical-RA185.6_DEC-12.9',
  type: 'Elliptical',
  morphology: 'E0',
  redshift: 0.034,
  massEstimate: 2.3e12,
  starCountEstimate: 150000000000,
  anomalyFlags: ['distorted arms', 'residual lensing trace'],
  tags: ['gravitational_lens_candidate', 'AI:AnomalyMatch'],
  anomalies: ['ANO-Ring-4E9DA1'],
  substructures: []
});

// Insert example Anomaly document
db.getCollection('anomalies').insertOne({
  id: 'ANO-Ring-4E9DA1',
  parentGalaxy: 'GAL-Elliptical-RA185.6_DEC-12.9',
  detectedBy: 'AnomalyMatch v1.2',
  classification: 'Collisional Ring',
  certainty: 0.68,
  linkedPapers: ['arXiv:2505.03508', 'DOI:10.1007/ringstruct2025']
});

// Aggregation: Count galaxies by type
const galaxyTypeCounts = db.getCollection('galaxies').aggregate([
  { $group: { _id: '$type', count: { $sum: 1 } } }
]).toArray();

console.log('Galaxy counts by type:',  galaxyTypeCounts);