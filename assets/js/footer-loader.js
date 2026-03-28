/**
 * Universal Footer Loader
 * Loads the footer component into all pages
 */
(function() {
	'use strict';
	
	// Load footer when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', loadFooter);
	} else {
		loadFooter();
	}
	
	function loadFooter() {
		var footerContainer = document.getElementById('footer-container');
		
		if (!footerContainer) {
			console.warn('Footer container not found. Make sure you have <div id="footer-container"></div> in your HTML.');
			return;
		}

		// Pages under /blog/ need one directory up for static assets
		var base = (window.location.pathname.indexOf('/blog/') !== -1) ? '../' : '';
		
		// Fetch footer HTML
		fetch(base + 'assets/components/footer.html')
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Failed to load footer: ' + response.status);
				}
				return response.text();
			})
			.then(function(html) {
				footerContainer.innerHTML = html;

				// Footer HTML uses site-root paths (index.html, assets/...). From /blog/* those
				// resolve incorrectly unless we prefix ../
				if (base === '../') {
					footerContainer.querySelectorAll('a[href]').forEach(function (a) {
						var h = a.getAttribute('href');
						if (!h || h.indexOf('://') !== -1 || h.indexOf('mailto:') === 0 || h.indexOf('tel:') === 0 || h.charAt(0) === '#') {
							return;
						}
						if (h.indexOf('../') !== 0) {
							a.setAttribute('href', '../' + h);
						}
					});
					footerContainer.querySelectorAll('img[src]').forEach(function (img) {
						var s = img.getAttribute('src');
						if (s && s.indexOf('://') === -1 && s.indexOf('../') !== 0 && s.indexOf('assets/') === 0) {
							img.setAttribute('src', '../' + s);
						}
					});
				}
				
				// Trigger any initialization scripts that depend on footer being loaded
				if (typeof window.footerLoaded === 'function') {
					window.footerLoaded();
				}
			})
			.catch(function(error) {
				console.error('Error loading footer:', error);
				// Fallback: show error message or use inline footer
				footerContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">Footer could not be loaded.</div>';
			});
	}
})();
