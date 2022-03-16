(function (ext) {
	var ExtName = 'test';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            [' ', 'svdfsbt', 'secId1'],
	            [' ', 'svdfsbt', 'secId2'],
	            [' ', 'svdfsbt', 'secId3'],
	            [' ', 'svdfsbt', 'secId4'],
	            [' ', 'svdfsbt', 'secId5', ''],
	            [' ', 'svdfsbt', 'secId6', 'bg'],
	        ],
			menus: {
			},
	        url: 'b'
	};
	ext.secId1 = function(ext,callback){
		
		callback();
	};
	ext.secId2 = function(ext,callback){
		
		callback();
	};
	ext.secId3 = function(ext,callback){
		
		callback();
	};
	ext.secId4 = function(ext,callback){
		
		callback();
	};
	ext.secId5 = function(ext,callback){
		
		callback();
	};
	ext.secId6 = function(ext,callback){
		
		callback();
	};
	ScratchExtensions.register(ExtName, descriptor, ext);
})({});
