let nickName =prompt('Enter your Nickname !')
console.log(nickName)
let age =prompt('How old are you ?')
console.log(age)
let device =prompt('What device do you usually use?')
console.log(device)
let favOs =prompt('What is your favorite OS ?')
console.log(favOs)
if (confirm('Let me guess some information about you !!')) {
    alert('Hello ' + nickName +' I think your age is ' + age + ' And you are using ' + device + ' And you like the ' + favOs + ' system. This is the information that you have entered :D')
}

