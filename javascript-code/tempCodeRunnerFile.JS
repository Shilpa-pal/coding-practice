function priString(str,times){
    if (times === 0 )return 
    console.log(str)
    priString(str,times-1)
}
priString("Shilpa",6)