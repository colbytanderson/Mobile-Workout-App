const {delete_user, restore, register, validate_user} = require('../mongo/account');

async function handleRegister(req, res) {  // post
    let userID = await register(req.params.userID);
    return res.send({userID});
}

async function handleRestore(req, res) {  // post
    let userID = await restore(req.params.userID);
    return res.send({userID});
}

async function handleDelete(req, res) {  // post
    let userID = await delete_user(req.params.userID);
    return res.send({userID});
}

async function handleValidate(req, res) {
    let result = await validate_user(req.params.userID);
    return res.send(result);
}

module.exports = {
    handleDelete,
    handleRegister,
    handleRestore,
    handleValidate
};