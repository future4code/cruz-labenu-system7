export default function validate_email (email:string): boolean{
  if(email==='' ||
    email.indexOf('@')===-1 ||
    email.indexOf('.')===-1 ||
    email.indexOf(' ')!==-1 ||
    email[0]==='.' || email[0]==='@' ||
    email[email.length-1]==='.' ||
    email[email.length-1]==='@'){
    return false
  }
  else{
    let n=0
    for(let e of email){
      if(e==='@')n++
    }
    if(n>1)return false
    else return true
  }
}