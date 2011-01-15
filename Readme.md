Compatible Toolbar Icons
===

Test extension to show icons in different toolbars and the customization
window across different plattforms and Firefox versions.

Target Versions
---

* Versions: Firefox 3, Firefox 4
* Platforms: win, mac, unix (Gnome)
* Button locations (user can customize)
  - Primary Toolbar (nav-bar)
  - Secondary Toolbars (PersonalBar)
  - Addon Bar (addon-bar); small toolbar, custom styling, fx4 only
  - Tab Bar (TabsToolbar); small toolbar, custom styling, fx4 only?
* Icons:
  - 16x16
  - 24x24
  - 16x16 monochrome (Firefox 4 mac, optional)

Goals
---

* As few different icons as possible
  It is feasible to implement it so that authors only need to ship 2 icons,
  same as with Firefox 3.
  
  Optionally a third icon can be shipped, to support the preference for
  monochrome icons of Firefox 4 mac
* As few css rules and selectors as possible.
  In Firefox 3 authors needed 2 rules with 2 selectors total.
  
  This example extension uses 2 rules with 3 selectors total. The optional
  Firefox 4 mac monochrome icon adds another 1 rule with 1 selector total.
* No need to mess with chrome.manifest.
  chrome.manifest is basically user-agent sniffing. Better do feature-sniffing.

TODO
---
This TODO is for Firefox 4, and complete. There should be no other changes required to make (most of) the pain go away.

1) At build-time, add a "compacticons" attribute (or equivalent) to the primary toolbar on win/mac, so that authors may distinguish between regular large toolbars (Firefox 3, Firefox 4 mac) and compact large toolbars (Firefox 4 win/mac)
2) At build-time, add a "monochromeicons" attribute (or equivalent) to the built-in toolbars on mac, so that authors may distinguish between "colorful" toolbars and monochrome ones on mac
3) Fix winstripe to use 16x16 icons everywhere

Current situation, as of 2011-01-15
---

* Firefox 3: Pass
* Firefox 4 win: Fail; uses large icon instead of small icon
* Firefox 4 mac: Fail; uses large icon instead of small icon, and uses color icon instead of monochrome icon
* Firefox 4 unix: Pass