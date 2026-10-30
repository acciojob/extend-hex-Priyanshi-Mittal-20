const extendHex = (shortHex) => {
  // write your code here
	let hexArr=shortHex.split("")
	let longHex=""
	if(hexArr[0]=="#")
	{
		longHex="#"
		for(let i=1;i<hexArr.length;i++)
			{
				longHex+=hexArr[i]+hexArr[i]
			}
		return longHex
	}
	else
	{
		longHex="#"
	for(let i=0;i<hexArr.length;i++)
		{
			longHex+=hexArr[i]+hexArr[i]
		}
		return longHex
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
