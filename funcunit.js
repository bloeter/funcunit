//what we need from javascriptmvc or other places
steal('./browser/resources/json.js').then('funcunit/syn',
	'./browser/core.js', './browser/adapters/adapters.js',
	'./browser/open.js', './browser/actions.js', './browser/getters.js',
	'./browser/traversers.js', './browser/queue.js', './browser/waits.js',
function($, Syn, FuncUnit) {
	window.FuncUnit = window.S = FuncUnit;
});

//steal('./browser/resources/jquery.js', function(){
//		if(!window.FuncUnit){
//			window.FuncUnit = {};
//		}
//		FuncUnit.jQuery = jQuery.noConflict(true);
//	})
//	.then('./browser/resources/json.js', 'funcunit/syn')
//	.then('./browser/core.js')
//	.then('./browser/adapters/adapters.js')
//	.then('./browser/open.js', './browser/actions.js',
//		'./browser/getters.js', './browser/traversers.js', './browser/queue.js',
//		'./browser/waits.js')