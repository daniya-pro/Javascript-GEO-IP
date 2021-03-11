fetch(`https://ipinfo.io/json?token=ea4fde52d6eacd`).then(
    res=>res.json() ).then(data=>{

        console.log(data)

    }).catch(e=>console.error(e))