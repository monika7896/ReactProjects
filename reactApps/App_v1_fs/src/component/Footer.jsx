export default function Footer(){
    const hour =new Date().getHours();
    const openHour =12;
    const colseHour = 22;
    if(hour>=openHour && hour <=colseHour)
    console.log(`We are open till: ${colseHour} o'Clock`);
    else alert("Sorry we are closed")
    return <footer>{new Date().toLocaleTimeString()}.we are open now</footer>
    }