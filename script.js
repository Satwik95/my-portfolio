console.log("hi")

let themeDots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')
let contact = document.getElementById('contact')
let office = document.getElementById('dot-2')

office.addEventListener('click', function(){
	console.log("hi")
		window.open("https://www.youtube.com/watch?v=Vmb1tqYqyII", "_blank");
	})


contact.addEventListener('click', function(){
	console.log("hi")
		window.open('mailto:satwik.mishra1995@gmail.com');
	})


if(theme==null){
	setTheme("light")
}
else{
	setTheme(theme)
}


for (var i=0; i<themeDots.length; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log("clicked");
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode=="light"){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode=="blue"){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode=="green"){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode=="purple"){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}