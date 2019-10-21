var path = require('path');

// Function to check letters and numbers
function validRepositoryId(repository_id) {
    let regex = /^[a-zA-Z0-9_\-]*$/;
    return regex.test(repository_id);
}

function repositoryFullPathByRepositoryId(REPOSITORIES_DIR) {
    return function (repository_id) {
        return path.resolve(path.join(REPOSITORIES_DIR, repository_id));
    }
}

module.exports = {
     validRepositoryId: validRepositoryId,
    repositoryFullPathByRepositoryId: repositoryFullPathByRepositoryId
};
