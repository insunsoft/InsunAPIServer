'use strict';

module.exports = {

	// +----------------------------------------------------------------------
	// | 使用: 
	// |     自动生成UUID:generateUUID() 
	// |     自动生成GUID:generateGUID() 
	// +----------------------------------------------------------------------
	// | 样例：
	// | var strUUID= InsunFUN.generateUUID()
	// | var strGUID=InsunFUN.generateGUID()
	// | console.log(`UUID==${strUUID};GUID==${strGUID}`)
	// | 输出：
	// | UUID==99185739-0806-e470-ca76-c8abb3add85d;GUID==cec03bc5-5c75-446f-87cf-c587ab24f3ba
	// +----------------------------------------------------------------------	
	//
	generateUUID: function () {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	},

	generateGUID: function () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}


}