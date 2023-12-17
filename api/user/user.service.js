const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const { ObjectId } = require('mongodb');

async function query() {
    try {
        const collection = await getUserCollection();
        const users = await collection.find().toArray();
        return users;
    } catch (err) {
        logger.error('Cannot find users', err);
        throw err;
    }
}

// async function add(gameSession) {
//     try {
//         const collection = await dbService.getCollection('gameSession');
//         const addedEntity = await collection.insertOne(gameSession);
//         const addedGameSession = addedEntity.ops[0];
//         return addedGameSession;
//     } catch (err) {
//         logger.error('Cannot insert gameSession', err);
//         throw err;
//     }
// }

async function update(user) {
    try {
        const { _id, ...userToSet } = user;
        const id = ObjectId(_id);
        const collection = await getUserCollection();
        await collection.updateOne({ '_id': id }, { $set: { ...userToSet } });
        user._id = `${ObjectId(id)}`;
        return user;
    } catch (err) {
        logger.error(`Cannot update user ${_id}`, err);
        throw err;
    }
}

async function getUserCollection() {
    return await dbService.getCollection('user');
}

module.exports = {
    query,
    // add,
    update
}
