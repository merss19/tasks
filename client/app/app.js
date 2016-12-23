import angular from 'angular'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import services from './services/services'
import ngMaterial from 'angular-material'


angular.module('app', [
		'ngMaterial',
		Common,
		Components,
		services.name
	])
	.config(($locationProvider) => {
		"ngInject";
		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
		$locationProvider.html5Mode(true).hashPrefix('!');
	})
	.component('app', AppComponent)
	.config(function ($mdThemingProvider) {
		"ngInject";
		$mdThemingProvider.definePalette('mainPalette', {
			'50': 'fff',
			'100': 'fff',
			'200': 'fff',
			'300': 'fff',
			'400': 'fff',
			'500': '292c33',//btns
			'600': '56567a',//hover/secondary
			'700': '56567a',//fab
			'800': '56567a',
			'900': '000',//overlay
			'A100': '292c33',//main color
			'A200': '000',
			'A400': '000',
			'A700': 'd50000',
			'contrastDefaultColor': 'light',


			'contrastDarkColors': ['50', '100',
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		})
		$mdThemingProvider.theme('default')
			.primaryPalette('mainPalette')

		$mdThemingProvider.theme('main')
			.dark()
			.backgroundPalette('mainPalette')
	})