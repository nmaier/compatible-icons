/************************************************************************
 * CreativeCommons CC0
 * To the extent possible under law, Nils Maier has waived all copyright
 * and related or neighboring rights to compatible-icons.
 ************************************************************************/

addEventListener('load', function() {
	removeEventListener('load', arguments.callee, true);

	var toolbaritems = [
		['nav-bar', 'main'],
		['TabsToolbar', 'tabs'],
		['addon-bar', 'addon'],
		['PersonalToolbar', 'bookmark']
		];

	function $(id) document.getElementById(id);

	/* Helper: Add an item to a toolbar  */
	function addToToolbar([toolbar, item]) {
		item = 'compatible-icons-' + item;
		toolbar = $(toolbar);
		if (!item || !toolbar)
			return;

		var currentSet = toolbar.currentSet.split(',');
		if (currentSet.indexOf(item) == -1) {
			currentSet.push(item);
			toolbar.currentSet = currentSet.join(',');
		}
	}

	// Add all items
	// addToToolbar will check if the toolbar is available
	toolbaritems.forEach(addToToolbar);

	// Show the addon-bar if present
	var addonBar = $('addon-bar');
	if (addonBar)
		addonBar.hidden = addonBar.collapsed = false;

}, true); // addEventListener(load)
