const createConfig = require('./1-getStarted');


// Sequentially run the necessary scripts
const runScripts = async () => {
  try {
    console.log('Running createConfig from 1-getStarted.js...');
    await createConfig();  // Waits for createConfig to complete

    const getCommunities = require('./2-getCommunities');
    const processCommunities = require('./3-getDomains');
    const getTypes = require('./4-getTypes');
    const getGraphQLData = require('./5-getAssets');
    const fetchAllAttributes = require('./6-getAttributes');
    const fetchAllRelations = require('./7-getRelations');
    const fetchAllTags = require('./8-getTags');
    const extractUniqueTypes = require('./9-getUniqueTypes');
    const buildAssetTypesTree = require('./a-buildAssetTree');
    const buildDomainTypesTree = require('./d-buildDomainTypeTree');
    const compareAndCreateUniqueAttributeTypes = require('./e-getUniqueAttributeTypes');
    const compareAndCreateUniqueRelationTypes = require('./f-getUniqueRelationTypes');
    const compressFiles = require('./g-compressExports');  // Import the new compression script

    console.log('Running getCommunities from 2-getCommunities.js...');
    await getCommunities();  // Waits for getCommunities to complete

    console.log('Running processCommunities from 3-getDomains.js...');
    await processCommunities();  // Waits for processCommunities to complete

    console.log('Running getTypes from 4-getTypes.js...');
    await getTypes();  // Waits for getTypes to complete

    console.log('Running getGraphQLData from 5-getAssets.js...');
    await getGraphQLData('extractedData');  // Waits for getGraphQLData to complete

    console.log('Running fetchAllAttributes from 6-getAttributes.js...');
    await fetchAllAttributes();  // Waits for fetchAllAttributes to complete

    console.log('Running fetchAllRelations from 7-getRelations.js...');
    await fetchAllRelations();  // Waits for fetchAllRelations to complete

    console.log('Running fetchAllTags from 8-getTags.js...');
    await fetchAllTags('extractedData');  // Waits for fetchAllTags to complete

    console.log('Running extractUniqueTypes from 9-getUniqueTypes.js...');
    await extractUniqueTypes();  // Waits for extractUniqueTypes to complete

    console.log('Running buildAssetTypesTree from a-buildAssetTree.js...');
    await buildAssetTypesTree();  // Waits for buildAssetTypesTree to complete

    console.log('Running buildDomainTypesTree from d-buildDomainTypeTree.js...');
    await buildDomainTypesTree();  // Waits for buildDomainTypesTree to complete

    console.log('Running compareAndCreateUniqueAttributeTypes from e-getUniqueAttributeTypes.js...');
    await compareAndCreateUniqueAttributeTypes();  // Waits for compareAndCreateUniqueAttributeTypes to complete

    console.log('Running compareAndCreateUniqueRelationTypes from f-getUniqueRelationTypes.js...');
    await compareAndCreateUniqueRelationTypes();  // Waits for compareAndCreateUniqueRelationTypes to complete

    console.log('Running compressFiles from g-compressExports.js...');
    await compressFiles();  // Compresses all the specified files into exports.zip

    console.log('All scripts completed successfully.');
  } catch (error) {
    console.error('Error running scripts:', error);
  }
};

// Start the script sequence
runScripts();
