// Created by ZQQ

document.addEventListener('DOMContentLoaded', function() { 
	printWelcome()
})

window.addEventListener('resize', resizeCanvas, false)

function printWelcome() {
  var welcomemsg = new Typed('.welcomemsg', {
		strings : ['Welcome to HACKER Q v1.0.0<br>~This code is for 100 days of code challenge, made by ZQQ!!~'],
		stringsElement: null, 
		typeSpeed: 40, 
		backSpeed: 40,
		showCursor: true,
		cursorChar: '█',
		autoInsertCss: true,
		onComplete: (self) => {
			$('.typed-cursor').hide()
			printNext()
		}
	});   
}

var printNext = function() {
		var typed = new Typed("#typed", {
		strings : ["&nbsp;								<br>" +
   	 "|￣￣￣￣￣￣￣￣￣￣￣￣￣|  <br>" +
	 "	HIRE ME		   <br>" +
	 "|＿＿＿＿＿＿＿＿＿＿＿＿＿|   <br>" +
		"	\\ (•◡•) /	  <br>" +
		"	 \\	 / <br>" +				
		"	   -——<br>" +
		"	  |   |<br>" +
		"	  |_  |_<br>" +
		"   _________________ <br><br>" +
		"To see a list with all the commands, type list<br>"],
		stringsElement: null, 
		typeSpeed: 0, 
		showCursor: false,
		cursorChar: '█',
		autoInsertCss: true,
		onComplete: (self) => {
		   $('.commandLine').toggleClass('hidden')
		   commandLine()
		}
	})
}

var throwException = function(command) {
	return command + ':command not found'
}

var printAvailableCommands = function(){
	$('.lineSent span').append('Available commands:<br>* list<br>* connect<br>* engage<br>* clear<br>(Coming soon more...)<br>')
}

printCommand = function(command) {
	$('.lineSent span').append(command + '<br>')
}

var makeConnection = function() {
	$('.commandLine').toggleClass('hidden')
	
	var connection = new Typed('.lineSent span', {
		 strings : [$('.lineSent span').text(),"Matching modules...","exploit/windows/smb/ms06_070_wkssvc | MS06-070 Microsoft Workstation Service NetpManageIPCConnect Overflow","Starting connection to (https://sololearn.com/courses/databases)","Fetching information... 12%","Fetching information... 23%","Fetching information... 31%","Fetching information... 45%","Fetching information... 51%","Fetching information... 67%","Fetching information... 81%","Fetching information... 93%","Fetching information... 99%","Fetching information... 100%","Data successfully stored in /home/hacker",""],
		stringsElement: null, 
		backSpeed: 0,
		smartBackspace: true,
		typeSpeed: 40, 
		showCursor: true,
		cursorChar: '█',
		autoInsertCss: true,
		onComplete: (self) => {
			$('.typed-cursor').hide()
			$('.commandLine').toggleClass('hidden')
			$('input').focus()
		}
	})
}

var manageCommands = function(command) {
	var lineString = 'root@hacker-workstation# '
	var exit
	
	switch(command.toLowerCase()) {
		case 'list': printCommand(lineString + command)
			printAvailableCommands()
			break
		case 'connect':
			printCommand(lineString + command)
			makeConnection()
			break
		case 'clear': 
			$('.lineSent span').text("")
			break
		case 'engage':
			hacking()
			break
		default: printCommand(lineString + throwException(command))
	}
} 

var commandLine = function() {
	var cursor

	$('input').focus()
  
	cursor = window.setInterval(function() {
		if ($('#cursor').css('visibility') === 'visible') {
			$('#cursor').css({ visibility: 'hidden' })
		} else {
			$('#cursor').css({ visibility: 'visible' })  
		}  
	}, 500)
  

	$('input').keyup(function(e) {
		if (e.keyCode == 13) {
			manageCommands($('#cmd span').text())
			$(this).val("");
		}
		$('#cmd span').text($(this).val())
	})
}


function hacking() {
	var c = document.getElementById('engage')
	
	c.height = window.innerHeight
	c.width = window.innerWidth
	
	var fontSize = 12
	var columns = c.width / fontSize
	var letters=[]
	
	for (var i = 0; i < columns; i++) {
		letters[i] = 1
	}
	
	context = c.getContext('2d')

	function drawMatrix() {
		context.fillStyle = 'rgba(0, 0, 0, 0.05)'
		context.fillRect(0, 0, c.width, c.height)
		context.fillStyle = getRandomColor()
		context.font = fontSize + 'px monospace'

		for (var i = 0; i < letters.length; i++) {
			var text = (Math.floor(Math.random() * 2)).toString()
			
			context.fillText(text, i * fontSize, letters[i] * fontSize)

			if (letters[i] * fontSize > c.height && Math.random() > 0.975) {
				letters[i] = 0
			}
			
			letters[i]++
		}

	}
	setInterval(drawMatrix, 120)
}

function resizeCanvas() {
	var c = document.getElementById("engage")
	
	c.width = window.innerWidth
	c.height = window.innerHeight
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  
  for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)]
  }
  
  return color;
}


$(window).click(function() {
	  $('input').focus()
})
