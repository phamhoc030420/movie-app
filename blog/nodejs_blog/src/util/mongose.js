module.exports = {
    mutipleMongoseToObject: (mongoses) => {
        return mongoses.map(mongoses => mongoses.toObject());
    },
    mongoseToObject: (mongose) => {
        return mongose ? mongose.toObject() : mongose;
    }
}