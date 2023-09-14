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
            device: 'mobile',
            skip: true,
        }

        const excludeTestMeta = {
            device: 'desktop',
            skip: true,
        }
        
        return validateMeta(excludeFixtureMeta, fixtureMeta) && validateMeta(excludeTestMeta, testMeta);
    }
}
