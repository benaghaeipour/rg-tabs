riot.tag('rg-tab', '<div show="{ active }" class="tab"> <yield></yield> </div>', '.tab { padding: 10px; }', function (opts) {
	var _this = this;
	_this.active = opts.active;
	_this.disabled = opts.disabled;
	
});

riot.tag('rg-tabs', '<div class="tabs"> <div class="headers"> <div each="{ tabs }" class="header { active: active, disabled: disabled }" onclick="{ parent.activate }"> <h4 class="heading">{ opts.heading }</h4> </div> </div> <yield></yield> </div>', 'rg-tabs .tabs { background-color: white; } rg-tabs .headers { display: -webkit-flex; display: -ms-flexbox; display: flex; } rg-tabs .header { -webkit-flex: 1; -ms-flex: 1; flex: 1; box-sizing: border-box; text-align: center; cursor: pointer; box-shadow: 0 -1px 0 0 #404040 inset; } rg-tabs .heading { padding: 10px; margin: 0; } rg-tabs .header.active { background-color: #404040; } rg-tabs .header.active .heading { color: white; } rg-tabs .header.disabled .heading { color: #888; }', function (opts) {
	var _this = this;
	_this.tabs = _this.tags['rg-tab'];

	_this.tabs.forEach(function (tab, i) {
		tab.index = i;
		});

	_this.on('mount', function () {
		var activeTab = false;
		_this.tabs.forEach(function (tab) {
			if (activeTab) {
				tab.active = false;
			}
			if (tab.active) {
				activeTab = true;
			}
		});
		});

	_this.activate = function (tab) {
		tab = tab.item;
		if (!tab.disabled) {
			deselectTabs();
			if (opts.onopen) {
				opts.onopen(tab);
			}
			tab.active = true;
			_this.update();
		}
	};

	function deselectTabs() {
		_this.tabs.forEach(function (tab) {
			tab.active = false;
		});
	}
	
});
