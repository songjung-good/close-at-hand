/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "ko",
    locale: "ko-KR",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		// 홈 화면용 모듈
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				dateFormat: "M월 D일, dddd"
			}
		},
		{
			module: "MMM-Face-Recognition-SMAI",
			position: "top_left",
			config: {
				prompt: "",
			}
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				fetchInterval: 7 * 24 * 60 * 60 * 1000,
		// 				symbol: "calendar-check",
		// 				url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Busan",
				locationID: "1838524", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c1f51ab4e5781f0611df186d95efb880"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Busan",
				locationID: "1838524", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c1f51ab4e5781f0611df186d95efb880"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},



		// AR 화면용 모듈
		{
			module: "helloworld",
			position: "top_left",
			config: {
				text: "AR 코디 추천",
				customClass: "large bright"
			},
			classes: "AR_Header"
		},
		{
			module: "helloworld",
			position: "top_left",
			config: {
				text: "포멀",
				customClass: "medium"
			},
			classes: "AR_category"
		},
		{
			module: "MMM-EasyPix",
			position: "middle_center",
			config: {
			  picName: "guideline-img.svg",            // Enter the picture file name.
			  className: "my-svg-image",                // Size picture precisely. Retains aspect ratio.
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			config: {
				text: "가이드라인에 맞춰 서주세요!",
				customClass: "medium blue-notification"
			},
			classes: "notification_AR"
		},


		// OOTD용 모듈
		{
			module: "helloworld",
			position: "top_left",
			config: {
				text: "OOTD 등록",
				customClass: "large bright"
			},
			classes: "OOTD_Header"
		},
		{
			module: "MMM-EasyPix",
			position: "top_right",
			config: {
			  picName: "hand-gesture.gif",
			  className: "gesture-size"
			},
			classes: "handgesture"
		},
		{
			module: "helloworld",
			position: "top_right",
			config: {
				text: "손동작을 따라하면 찰영돼요!",
				customClass: "medium bright hand-color"
			},
			classes: "notification_OOTD"
		},



		{
			module: "MMM-page-indicator",
			position: 'bottom_bar',
			config: {
				pages: 3,
			}
		},
		{
			module: "MMM-pages",
			config: {
				modules: [
					["AR_Header", "test", "AR_category", "MMM-EasyPix", "notification_AR"],  // page 0: AR
					["alert", "MMM-Face-Recognition-SMAI", "updatenotification", "clock", "compliments", "weather"],  // page 1: Home
					["OOTD_Header", "handgesture", "notification_OOTD", "navi4"]  // page 1: OOTD
				],
				fixed: ["MMM-page-indicator"],
				hiddenPages: {
                    "screenSaver": [ "clock" ],  // AOD
                    // "admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
                },
				homePage: 1, // home page index
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
