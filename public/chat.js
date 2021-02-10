// Make Connection

const socket = io.connect('http://localhost:3000/');

// Query DOM

const output = document.getElementById('output');
const handle = document.getElementById('name');
const message = document.getElementById('message');
const sendBtn = document.getElementById('send');
const feedback = document.getElementById('feedback');

//Emit Events

sendBtn.addEventListener('click',()=>{
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    })
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing', handle.value)
} )

//Listen for events

socket.on('chat', (data)=>{
    feedback.innerHTML = "";
    output.innerHTML+='<p><strong>'+data.handle + ':</strong>'+ data.message +'</p>';
})

socket.on('typing',(data)=>{
    feedback.innerHTML = '<p><em>'+data+' is typing....</em></p';
})