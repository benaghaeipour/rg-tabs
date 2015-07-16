riot.tag('demo-app', '<rg-tabs onopen="{ tabOpened }"> <rg-tab heading="Tab 1"> <rg-tab-heading><img src="img/cubes.png"></rg-tab-heading> The first tab content </rg-tab> <rg-tab heading="Tab 2" active="true"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut </rg-tab> <rg-tab heading="Tab 3"> Tab three </rg-tab> <rg-tab heading="Tab 4" disabled="true"> Tab four </rg-tab> <rg-tab heading="Tab 5"> Tab five </rg-tab> </rg-tabs>', function (opts) {
	var _this = this;
	_this.tabOpened = function (tab) {
		console.log(tab);
	};
	
});