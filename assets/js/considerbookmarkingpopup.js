const openBookmarkPopup = (site) => {
	const isMac = () => {
		return (navigator.appVersion.indexOf("Mac") != -1)
	}

	if(!localStorage.getItem(site + "__bookmarkModalClosed") || localStorage.getItem(site + "__bookmarkModalClosed") != "yes") {
		bookmarkPopupHTML = `
		<div style="display: block; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, .7); position: fixed; top: 0; left: 0; z-index: 9999;">
			<div style="box-sizing: border-box; border-radius: 8px; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 1.5rem; width: 40rem; max-width: 95%; background-color: #fff; box-shadow: 0 .25rem 1rem rgba(0, 0, 0, .1);">
				<button style="position: relative; margin-bottom: .5rem; display: block; float: right; height: 1.75rem; width: 1.75rem; cursor: pointer; border: none; background-color: transparent;" onclick="localStorage.setItem('${site}__bookmarkModalClosed', 'yes'); this.parentElement.parentElement.outerHTML = '';">
					<svg style="width: 100%; height: 100%; fill: #888;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
				</button>
				<h1 style="clear: both; font-size: 3rem; line-height: 1.5; margin-bottom: 1.5rem; letter-spacing: -.05rem;">Consider Bookmarking?</h1>
				<p style="display: block; font-size: 1.15rem; opacity: .75; margin-bottom: .25rem;">Press:</p>
				<code style="display: inline-block; background-color: #f8f8f8; border: 1px solid #dedede; border-radius: 6px; padding: 0 2.5rem; font-family: monospace; font-size: 4rem; margin-bottom: 1.5rem;">${isMac ? "CMD" : "CTRL"} + D</code>
			</div>
		</div>
		`;
		document.body.innerHTML += bookmarkPopupHTML;
	}
}

const openAddToHomeScreen = (site) => {
	if(!localStorage.getItem(site + "__homescreenModalClosed") || localStorage.getItem(site + "__homescreenModalClosed") != "yes") {
		homescreenPopupHTML = `
		<div style="display: block; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, .7); position: fixed; top: 0; left: 0; z-index: 9999;">
			<div style="box-sizing: border-box; border-radius: 8px; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 1.5rem; width: 40rem; max-width: 95%; background-color: #fff; box-shadow: 0 .25rem 1rem rgba(0, 0, 0, .1);">
				<button style="position: relative; margin-bottom: .5rem; display: block; float: right; height: 1.75rem; width: 1.75rem; cursor: pointer; border: none; background-color: transparent;" onclick="localStorage.setItem('${site}__homescreenModalClosed', 'yes'); this.parentElement.parentElement.outerHTML = '';">
					<svg style="width: 100%; height: 100%; fill: #888;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
				</button>
				<h1 style="clear: both; font-size: 2.5rem; line-height: 1.5; margin-bottom: 1.5rem; letter-spacing: -.05rem;">Consider Adding to Home Screen?</h1>
			</div>
		</div>
		`;
		document.body.innerHTML += homescreenPopupHTML;
	}
}