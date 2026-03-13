document.getElementById("f").addEventListener("submit",async(e)=>{

e.preventDefault()

const msg=document.getElementById("msg")

/* anti bot */

if(document.getElementById("website").value!==""){

msg.innerText="Spam detectado"
return

}

/* cooldown anti spam */

const lastSend=localStorage.getItem("lastSend")

if(lastSend && Date.now()-lastSend<30000){

msg.innerText="Aguarde 30 segundos antes de enviar novamente."
return

}

const nome=document.getElementById("n").value
const cpf=document.getElementById("c").value
const idade=document.getElementById("i").value
const regiao=document.getElementById("r").value
const whatsapp=document.getElementById("w").value
const area=document.getElementById("a").value

const webhook="https://discord.com/api/webhooks/1481907363652046919/-SoB6u5OYut_9_TMlYmOGg4hFgX4cOofnW97Zh4sYQDqIn63VvX7avLPT-skA0qyads6"

const data={

content:"<@&1481916867474882591>",

embeds:[{

title:"📋 Novo cadastro freelancer",

color:5763719,

fields:[

{name:"Nome",value:nome},
{name:"CPF",value:cpf},
{name:"Idade",value:idade,inline:true},
{name:"Região",value:regiao,inline:true},
{name:"WhatsApp",value:whatsapp},
{name:"Área desejada",value:area}

],

footer:{
text:"Terceiriza Group"
},

timestamp:new Date()

}]

}

try{

await fetch(webhook,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

localStorage.setItem("lastSend",Date.now())

msg.style.color="#00d084"

msg.innerText="Cadastro enviado! Aguarde até 24h para que a Terceiriza Group entre em contato."

document.getElementById("f").reset()

}catch{

msg.style.color="#ff4d4d"

msg.innerText="Erro ao enviar. Entre em contato no WhatsApp: (19) 98816-9447"

}

})
