// // https://api.telegram.org/bot6142715331:AAEvZIGv0SO9Azx7k2TZWtEWWAxGUdpqyoA/getUpdates   

// let token="6142715331:AAEvZIGv0SO9Azx7k2TZWtEWWAxGUdpqyoA"
// let CHAT_ID="1484046186"
// let url_API=`https://api.telegram.org/bot${token}/sendMessage`
// let tg=document.querySelector("#tg").addEventListener("submit", function(e){
//     e.preventDefault()
//     let message=`<b>Заявка с сайта!</b>\n`
//     message+=`<b>Отправитель:</b> ${this.name.value}\n`
//     message+=`<b>Номер:</b>${this.number.value}\n`
//     message+=`<b>Почта:</b>${this.email.value}`
//     console.log(message);
// axios.post(url_API,{
//     chat_id:CHAT_ID,
//     parse_mode:"html",
//     text:message
// }).then((res)=>{
//     this.name.value=""
//     this.number.value=""
//     this.email.value=""
//     success.innerHTML="собшение отправлено"
//     success.style.display="block"
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>console.log("Succsessfully"))
// })

let TOKEN="6142715331:AAEvZIGv0SO9Azx7k2TZWtEWWAxGUdpqyoA"
let CHAT_ID="1484046186"
let URL_API=`https://api.telegram.org/bot${TOKEN}/sendDocument`

document.getElementById("tg").addEventListener("submit", function(e){
    e.preventDefault()
    const formData=new FormData()
    formData.append("chat_id",CHAT_ID)
    formData.append("document", this.document.files[0])
    axios.post(URL_API,formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    }).then((res)=>{
            this.document.value=""
            success.innerHTML="собшение отправлено"
            success.style.display="block"
        }).catch((err)=>{
                console.log(err);
            }).finally(()=>console.log("Succsessfully"))
            })
