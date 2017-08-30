//Whitespace:
let that = this
// ^    ^ ^
//those are all whitespace
//Whitespace is just the space in between your code.
//not always needed, but helpful to make it more readable.

// ---------------------------------------------
//Names
//names are any letter followed by other letters,
//numbers, or underscores.
//CANNOT BE:
//These are reserved words that just aren't usable
//to define names
// abstract  	else  	instanceof  	super  
// boolean  	enum  	int  	switch  
// break  	export  	interface  	synchronized  
// byte  	extends  	let  	this  
// case  	false  	long  	throw  
// catch  	final  	native  	throws  
// char  	finally  	new  	transient  
// class  	float  	null  	true  
// const  	for  	package  	try  
// continue  	function  	private  	typeof  
// debugger  	goto  	protected  	var  
// default  	if  	public  	void  
// delete  	implements  	return  	volatile  
// do  	import  	short  	while  
// double  	in  	static  	with  
//JUST DONT USE THESE:
//These are pre-defined objects, methods or properties
//just don't use em.
// alert  	frames  	outerHeight  
// all  	frameRate  	outerWidth  
// anchor  	function  	packages  
// anchors  	getClass  	pageXOffset  
// area  	hasOwnProperty  	pageYOffset  
// Array  	hidden  	parent  
// assign  	history  	parseFloat  
// blur  	image  	parseInt  
// button  	images  	password  
// checkbox  	Infinity  	pkcs11  
// clearInterval  	isFinite  	plugin  
// clearTimeout  	isNaN  	prompt  
// clientInformation  	isPrototypeOf  	propertyIsEnum  
// close  	java  	prototype  
// closed  	JavaArray  	radio  
// confirm  	JavaClass  	reset  
// constructor  	JavaObject  	screenX  
// crypto  	JavaPackage  	screenY  
// Date  	innerHeight  	scroll  
// decodeURI  	innerWidth  	secure  
// decodeURIComponent  	layer  	select  
// defaultStatus  	layers  	self  
// document  	length  	setInterval  
// element  	link  	setTimeout  
// elements  	location  	status  
// embed  	Math  	String  
// embeds  	mimeTypes  	submit  
// encodeURI  	name  	taint  
// encodeURIComponent  	NaN  	text  
// escape  	navigate  	textarea  
// eval  	navigator  	top  
// event  	Number  	toString  
// fileUpload  	Object  	undefined  
// focus  	offscreenBuffering  	unescape  
// form  	open  	untaint  
// forms  	opener  	valueOf  
// frame  	option  	window  
// THESE ARE NO-NOs AS WELL:
//These are all event handlers that might depend on the browser
// onbeforeunload  	ondragdrop  	onkeyup  	onmouseover  
// onblur  	onerror  	onload  	onmouseup  
// ondragdrop  	onfocus  	onmousedown  	onreset  
// onclick  	onkeydown  	onmousemove  	onsubmit  
// oncontextmenu  	onkeypress  	onmouseout  	onunload 

//----------------------------------------------

//NUMBERS
//javascript only has one type of number.
//an integer.

//decimals and whole numbers aren't different 
//(i.e. 1 === 1.0)
//interger:
1
//fraction:
.1
//exponent
1e2
//e = 10
//exponent means number to the power of.
//that means 2e2  
//is same as 2 * 10^2
//both equal 200
//isNaN() (is not a number) function will return true
//if parameters inside function are not a number

//-----------------------------------------------------

//STRINGS
//wrapped in single or double quotes
//\ is the 'escape' (cancels out code) character
" YOUR MESSAGE HERE "
//'You're fired!''
//typing that out shoots an error. to fix it, write:
'You\'re fired!'
//notice the escape key, makes it so that your string
//does not prematurely end.


//strings have a length.
'asdf'.length
//that will return as 4
//Strings are immutable (they can't be changed)
//however, they can be concatenated with other strings
//to make a new string