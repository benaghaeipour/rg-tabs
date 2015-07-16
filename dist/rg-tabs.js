riot.tag('raw', '<span></span>', function (opts) {
	var _this = this;
	_this.on('mount', function () {
		this.root.innerHTML = opts.content;
	});
	
});
riot.tag('rg-tab-heading', '<yield></yield>', 'rg-tab-heading , [riot-tag="rg-tab-heading"] { display: none; }', function (opts) {


});

riot.tag('rg-tab', '<div show="{ active }" class="tab"> <yield></yield> </div>', '.tab { padding: 10px; }', function (opts) {
	var _this = this;
	_this.active = opts.active;
	_this.disabled = opts.disabled;

});

riot.tag('rg-tabs', '<div class="tabs"> <div class="headers"> <div each="{ tab in tabs }" class="header { active: tab.active, disabled: tab.disabled }" onclick="{ activate }"> <h4 class="heading" if="{ tab.opts.heading && !tab.heading }">{ tab.opts.heading }</h4> <div class="heading" if="{ tab.heading }"> <raw content="{ tab.heading }"></raw> </div> </div> </div> <yield></yield> </div>', 'rg-tabs .tabs, [riot-tag="rg-tabs"] .tabs{ background-color: white; } rg-tabs .headers, [riot-tag="rg-tabs"] .headers{ display: -webkit-flex; display: -ms-flexbox; display: flex; } rg-tabs .header, [riot-tag="rg-tabs"] .header{ -webkit-flex: 1; -ms-flex: 1; flex: 1; box-sizing: border-box; text-align: center; cursor: pointer; box-shadow: 0 -1px 0 0 #404040 inset; } rg-tabs .heading, [riot-tag="rg-tabs"] .heading{ padding: 10px; margin: 0; } rg-tabs .header.active, [riot-tag="rg-tabs"] .header.active{ background-color: #404040; } rg-tabs .header.active .heading, [riot-tag="rg-tabs"] .header.active .heading{ color: white; } rg-tabs .header.disabled .heading, [riot-tag="rg-tabs"] .header.disabled .heading{ color: #888; }', function (opts) {
	var _this = this;
	_this.onopen = opts.onopen;
	_this.tabs = _this.tags['rg-tab'];

	_this.on('mount', function () {
		var activeTab = false;
		_this.tabs.forEach(function (tab, i) {

			tab.index = i;

			var tabHeading = tab.tags['rg-tab-heading'];
			if (tabHeading) {
				if (Object.prototype.toString.call(tabHeading) !== '[object Array]')
					tab.heading = tabHeading.root.innerHTML;
			}

			if (activeTab) {
				tab.active = false;
			}
			if (tab.active) {
				activeTab = true;
			}
		});
		_this.update();
		});

	_this.activate = function (e) {
		tab = e.item.tab;
		if (!tab.disabled) {
			deselectTabs();
			if (_this.onopen) {
				_this.onopen(tab);
			}
			tab.active = true;
			}
	};

	function deselectTabs() {
		_this.tabs.forEach(function (tab) {
			tab.active = false;
		});
	}
	
});
