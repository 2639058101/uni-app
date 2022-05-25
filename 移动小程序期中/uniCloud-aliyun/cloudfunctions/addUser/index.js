'use strict';
const db=uniCloud.database()
const userDb=db.collection('user')
exports.main = async (event, context) => {
    let addUserRes=await userDb.add(event);
	return addUserRes;
};
