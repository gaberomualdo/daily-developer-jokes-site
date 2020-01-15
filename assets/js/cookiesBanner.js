const __sendHTTPCookiesRequest = (site, approved) => {
	var xmlhttp = new XMLHttpRequest();

	// && https://private.xtrp.io/projects/cookiesData/

	xmlhttp.open("GET", encodeURI("http://localhost:3000/?time=" + (new Date().toLocaleString()) + "&site=" + site + "&approved=" + approved), true);
	xmlhttp.send();
}

const __createCookiesBanner = (width, emsize, site) => {
	if(!localStorage.getItem(site + "__cookiesAccepted") || localStorage.getItem(site + "__cookiesAccepted") != "yes") {
		cookiesBannerHTML = `
		<div id="acceptcookies_banner" style="box-sizing: border-box; position: fixed; width: 100%; min-height: ${4 * emsize}px; font-size: 0; bottom: 0; left: 0; background-color: rgba(255, 255, 255, .95); box-shadow: 0 ${-.125 * emsize}px ${.5 * emsize}px rgba(0, 0, 0, .1); padding: ${.75 * emsize}px ${1 * emsize}px; padding-bottom: 0; text-align: center;">
			<div style="width: ${width}px; max-width: 100%; height: 100%; line-height: ${2.5 * emsize}px; display: inline-block;">
				<p style="display: block; float: left; font-size: ${1.125 * emsize}px; margin-bottom: ${.5 * emsize}px">This site uses cookies to record site usage.</p>
				<div style="display: block; float: right;">
					<button onclick="__sendHTTPCookiesRequest('${site}', 'yes'); localStorage.setItem('${site}__cookiesAccepted', 'yes'); this.parentElement.parentElement.parentElement.outerHTML = '';" style="font-size: ${1 * emsize}px; height: ${2.5 * emsize}px; display: inline-block; border: none; border-radius: 3px; background-color: #27ae60; color: #fff; padding: 0 ${1 * emsize}px; margin-bottom: ${.75 * emsize}px; cursor: pointer;">Accept Cookies</button>
					<button onclick="window.open('about:blank', '_self');" style="font-size: ${1 * emsize}px; height: ${2.5 * emsize}px; display: inline-block; background-color: #fff; border: 1px solid #222; border-radius: 3px; padding: 0 ${1 * emsize}px; margin-bottom: ${.75 * emsize}px; margin-left: ${.75 * emsize}px; cursor: pointer;">Leave Site</button>
				</div>	
			</div>
		</div>
		`;

		document.body.innerHTML += cookiesBannerHTML;
	}
};