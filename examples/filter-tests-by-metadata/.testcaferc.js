function validateMeta (excludeMeta, meta) {
    for (let key of Object.keys(excludeMeta)) {
        if (meta[key] === excludeMeta[key])
            return false;
    }

    return true;
}

module.exports = {
    filter: (testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
        const excludeFixtureMeta = {
            severity: 'low',
            repeatDaily: false,
        }

        const excludeTestMeta = {
            device: 'mobile',
            skip: true,
        }
        
        return validateMeta(excludeFixtureMeta, fixtureMeta) && validateMeta(excludeTestMeta, testMeta);
    }
}
