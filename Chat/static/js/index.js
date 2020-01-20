var socket = io()

socket.on('connect',function(){
    var name = prompt( '닉네임을 입력 해주세요!', '')

    if(!name){
        name = '익명'
    }
    socket.emit('newUser',name)
})

socket.on('update', function(data){
    var chat = document.getElementById('chat')
    var message = document.createElement('div')
    var node = document.createTextNode(`${data.name}: ${data.message}`)
    var classNmae = ''

    switch(data.type){
        case 'message':
            classNmae = 'other'
            break
        case 'connect':
            classNmae = 'connect'
            break
        case 'disconnect':
            classNmae = 'disconnect'
            break
    }

    message.classList.add(classNmae)
    message.appendChild(node)
    chat.appendChild(message)
})

function send(){
    var message = document.getElementById('test').value

    document.getElementById('test').value = ''

    var msg = document.createElement('div')
    var node = document.createTextNode(message)

    msg.classList.add('me')
    msg.appendChild(node)
    chat.appendChild(msg)

    socket.emit('message', {type: 'message', message: message})
}
