// Module level Variables

var cubesuff=["","2","'"];
var RU_turns = [["U"],["R"]];
var MU_turns = [["U"], ["M"]];

// Helper functions
// Also, ripped off from qqTimer source

function rndEl(x){return x[Math.floor(Math.random()*x.length)];}

function isArray(obj){
	if(typeof obj=='object'){
		var test = obj.constructor.toString().match(/array/i); 
		return (test != null);
	}
	return false;
}

function megascramble(turns, suffixes, num, len){
	/*
	 * MegaScramble function ripped off of qqTimer source
	 *
	 * https://github.com/cubing/qqTimer/blob/6394fbd8fec0d3a323197405d0aec2d3adecf96a/index.htm#L2173-L2202
	 *
	 * This function returns an array of strings, each string is a scramble that has len number
	 * of moves in it, and the length of this array is num.
	 *
	 * The arguments are defined as so:
	 *
	 *	turns - Array of array (of arrays) consisting of the turns we want in the final scramble.
	 *					I am still not sure about what each array level indicates. For this application,
	 *					that understanding is not required, hence I am leaving it.
	 *
	 *	suffixes - The possible suffixes that may be given to each individual layer name in the 
	 *						 turns array of arrays. (See `cubesuff` array for example of this)
	 *
	 *	num - The number of scrambles that we want from this function
	 *	
	 *	len - the length of each scramble
	 *
	 *
	 */
	var ss = [];
	var donemoves=[];
	var lastaxis;
	var i,j,k;
	for(i=0;i<num;i++){
		var s="";
		lastaxis=-1;
		for(j=0;j<len;j++){
			var done=0;
			do{
				var first=Math.floor(Math.random()*turns.length);
				var second=Math.floor(Math.random()*turns[first].length);
				//console.log("First: " + first);
				//console.log("Second: " + second);
				if (first!=lastaxis) {
					for(k=0;k<turns[first].length;k++){donemoves[k]=0;}
					lastaxis=first;
				}
				if (donemoves[second]==0) {
					donemoves[second]=1;
					if(isArray(turns[first][second])){
						s+=rndEl(turns[first][second])+rndEl(suffixes)+" ";
					}else{
						s+=turns[first][second]+rndEl(suffixes)+" ";
					}
					done=1;
				}
			}while(done==0);
		}

		//console.log(s);
		s = s.substr(0, s.length-1);
		ss[i] = s;
	}

	return ss;
}
