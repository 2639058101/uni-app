'use strict';
const db=uniCloud.database()
const userDb=db.collection('user')
exports.main = async (event,context) => {
	let res=await userDb.doc(event.id).update({
		username:event.username,
		password:event.password,
		email:event.email,
		mobile:event.mobile,
		nickname:event.nickname	
	});
	return res;
};
