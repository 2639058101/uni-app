'use strict';
const db=uniCloud.database()
const userDb=db.collection('user')
exports.main = async (event, context) => {
	let res=await userDb.where({}).get();
	return res;
};
