# reddit-comp-creator

> This repository is used for generating automated markup each week
> for the competition run on [/r/Cubers](https://www.reddit.com/r/Cubers/)

This competition is currently run by [PWNZ0R_P373R](https://www.reddit.com/user/PWNZ0R_P373R) 
([Reddit](https://www.reddit.com/user/PWNZ0R_P373R) | [GitHub](https://github.com/M0N57R0517Y)).

I ([Reddit](https://www.reddit.com/user/siddharthk) | [GitHub](https://github.com/icyflame)) maintain
this repository.

### Code Arrangement

- This repository consists of [cubing/jsss](https://github.com/cubing/jsss) as a submodule.
- `main.html` is the place where everything happens, it is hosted on github-pages. So visit [here](http://icyflame.github.io/reddit-comp-creator/main.html)
- It also uses `toastr` as a plugin to show notifications to the user regarding markup generation etc.


### Generated markup right now

This module will automatically generate and fill out:

- Competition number
- Competition deadline in GMT
- Scrambles for the weekly events as of today (16th March, 2016):
	* 2x2
	* 3x3
	* 4x4
	* 3x3OH
	* 2GEN
	* LSE
	* OLL (Incremented each week, linked appropriately)

### TODO

- [ ] Rotation event: A rotation happens from a list of events.
- [ ] Requested event: Events requested by the community is added to this FIFO list, and then
			included every week.


Code licensed under MIT.

Copyright (C) 2016  Siddharth Kannan <siddharthkannan@tutanota.com>
