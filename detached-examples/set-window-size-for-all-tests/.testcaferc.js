module.exports = {
    hooks: {
        test: {
            before: async (t) => {
                await t.resizeWindow(200, 100)
            }
        }
    }
}
