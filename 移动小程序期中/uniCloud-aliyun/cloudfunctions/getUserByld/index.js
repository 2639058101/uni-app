'use strict';
const db=uniCloud.database()
const userDb=db.collection('user')
exports.main = async (event, context) => {
	let res=await userDb.where({
		_id:event.id
	}).get();
	return res;
};
