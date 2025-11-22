/*! Pushy - v1.3.0 - 2019-6-25
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee
* Converted to vanilla JavaScript */

(function () {
	var pushy = document.querySelector('.pushy'), //menu css class
		body = document.body,
		container = document.getElementById('container'), //container css class
		push = document.querySelectorAll('.push'), //css class to add pushy capability
		pushyLeft = 'pushy-left', //css class for left menu position
		pushyOpenLeft = 'pushy-open-left', //css class when menu is open (left position)
		pushyOpenRight = 'pushy-open-right', //css class when menu is open (right position)
		siteOverlay = document.querySelector('.site-overlay'), //site overlay
		menuLinkFocus = pushy ? document.querySelector(pushy.dataset.focus) : null, //focus on link when menu is open
		menuSpeed = 200, //fallback menu speed
		menuWidth = pushy ? pushy.offsetWidth + 'px' : '0px', //fallback menu width
		submenuClass = '.pushy-submenu',
		submenuOpenClass = 'pushy-submenu-open',
		submenuClosedClass = 'pushy-submenu-closed',
		submenu = document.querySelectorAll(submenuClass);

	// Early exit if pushy element doesn't exist
	if (!pushy) return;

	//check if menu-btn-class data attribute exists
	var menuBtnClass;
	if (typeof pushy.dataset.menuBtnClass !== 'undefined') {
		menuBtnClass = pushy.dataset.menuBtnClass; //take user defined menu button CSS class
	} else {
		menuBtnClass = '.menu-btn'; //set default menu button CSS class
	}

	//css classes to toggle the menu
	var menuBtn = document.querySelectorAll(menuBtnClass + ', .pushy-link');

	//css class to focus when menu is closed w/ esc key
	var menuBtnFocus = document.querySelector(menuBtnClass);

	//close menu w/ esc key
	document.addEventListener('keyup', function (e) {
		//check if esc key is pressed
		if (e.keyCode == 27) {
			//check if menu is open
			if (body.classList.contains(pushyOpenLeft) || body.classList.contains(pushyOpenRight)) {
				if (cssTransforms3d) {
					closePushy(); //close pushy
				} else {
					closePushyFallback();
					opened = false; //set menu state
				}

				//focus on menu button after menu is closed
				if (menuBtnFocus) {
					menuBtnFocus.focus();
				}
			}
		}
	});

	function togglePushy() {
		//add class to body based on menu position
		if (pushy.classList.contains(pushyLeft)) {
			body.classList.toggle(pushyOpenLeft);
		} else {
			body.classList.toggle(pushyOpenRight);
		}

		//focus on link in menu after css transition ends
		if (menuLinkFocus) {
			pushy.addEventListener('transitionend', function handler() {
				menuLinkFocus.focus();
				pushy.removeEventListener('transitionend', handler);
			});
		}
	}

	function closePushy() {
		if (pushy.classList.contains(pushyLeft)) {
			body.classList.remove(pushyOpenLeft);
		} else {
			body.classList.remove(pushyOpenRight);
		}
	}

	// Animation helper function
	function animateElement(element, property, value, duration) {
		if (!element) return;
		element.style.transition = property + ' ' + duration + 'ms ease';
		element.style[property] = value;
	}

	function openPushyFallback() {
		//animate menu position based on CSS class
		if (pushy.classList.contains(pushyLeft)) {
			body.classList.add(pushyOpenLeft);
			animateElement(pushy, 'left', '0px', menuSpeed);
			if (container) animateElement(container, 'left', menuWidth, menuSpeed);
			push.forEach(function (el) {
				animateElement(el, 'left', menuWidth, menuSpeed);
			});
		} else {
			body.classList.add(pushyOpenRight);
			animateElement(pushy, 'right', '0px', menuSpeed);
			if (container) animateElement(container, 'right', menuWidth, menuSpeed);
			push.forEach(function (el) {
				animateElement(el, 'right', menuWidth, menuSpeed);
			});
		}

		//focus on link in menu
		if (menuLinkFocus) {
			menuLinkFocus.focus();
		}
	}

	function closePushyFallback() {
		//animate menu position based on CSS class
		if (pushy.classList.contains(pushyLeft)) {
			body.classList.remove(pushyOpenLeft);
			animateElement(pushy, 'left', '-' + menuWidth, menuSpeed);
			if (container) animateElement(container, 'left', '0px', menuSpeed);
			push.forEach(function (el) {
				animateElement(el, 'left', '0px', menuSpeed);
			});
		} else {
			body.classList.remove(pushyOpenRight);
			animateElement(pushy, 'right', '-' + menuWidth, menuSpeed);
			if (container) animateElement(container, 'right', '0px', menuSpeed);
			push.forEach(function (el) {
				animateElement(el, 'right', '0px', menuSpeed);
			});
		}
	}

	function toggleSubmenu() {
		//hide submenu by default
		document.querySelectorAll(submenuClass).forEach(function (el) {
			el.classList.add(submenuClosedClass);
		});

		document.querySelectorAll(submenuClass).forEach(function (el) {
			el.addEventListener('click', function (e) {
				var selected = this;

				if (selected.classList.contains(submenuClosedClass)) {
					//hide same-level opened submenus
					var siblings = Array.from(selected.parentElement.children).filter(function (child) {
						return child !== selected && child.matches(submenuClass);
					});
					siblings.forEach(function (sibling) {
						sibling.classList.add(submenuClosedClass);
						sibling.classList.remove(submenuOpenClass);
					});
					//show submenu
					selected.classList.remove(submenuClosedClass);
					selected.classList.add(submenuOpenClass);
				} else {
					//hide submenu
					selected.classList.add(submenuClosedClass);
					selected.classList.remove(submenuOpenClass);
				}
				// prevent event to be triggered on parent
				e.stopPropagation();
			});
		});
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	var cssTransforms3d = (function csstransforms3d() {
		var el = document.createElement('p'),
			supported = false,
			transforms = {
				'webkitTransform': '-webkit-transform',
				'OTransform': '-o-transform',
				'msTransform': '-ms-transform',
				'MozTransform': '-moz-transform',
				'transform': 'transform'
			};

		if (document.body !== null) {
			// Add it to the body to get the computed style
			document.body.insertBefore(el, null);

			for (var t in transforms) {
				if (el.style[t] !== undefined) {
					el.style[t] = 'translate3d(1px,1px,1px)';
					supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
				}
			}

			document.body.removeChild(el);

			return (supported !== undefined && supported.length > 0 && supported !== "none");
		} else {
			return false;
		}
	})();

	// Keep track of menu state for fallback
	var opened = false;

	if (cssTransforms3d) {
		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.forEach(function (btn) {
			btn.addEventListener('click', function () {
				togglePushy();
			});
		});

		//close menu when clicking site overlay
		if (siteOverlay) {
			siteOverlay.addEventListener('click', function () {
				togglePushy();
			});
		}
	} else {
		//add css class to body
		body.classList.add('no-csstransforms3d');

		//hide menu by default
		if (pushy.classList.contains(pushyLeft)) {
			pushy.style.left = '-' + menuWidth;
		} else {
			pushy.style.right = '-' + menuWidth;
		}

		//fixes IE scrollbar issue
		if (container) {
			container.style.overflowX = 'hidden';
		}

		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.forEach(function (btn) {
			btn.addEventListener('click', function () {
				if (opened) {
					closePushyFallback();
					opened = false;
				} else {
					openPushyFallback();
					opened = true;
				}
			});
		});

		//close menu when clicking site overlay
		if (siteOverlay) {
			siteOverlay.addEventListener('click', function () {
				if (opened) {
					closePushyFallback();
					opened = false;
				} else {
					openPushyFallback();
					opened = true;
				}
			});
		}
	}
})();
