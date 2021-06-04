export function date_period(date: (string | Date)) : number{
  let data : Date
  if(typeof date==='string') data = new Date(date+'T00:00:00')
  else data = date

  if(!data.getFullYear())return -2

  const today = new Date()

  if(data.getFullYear()>today.getFullYear())return 1
  else if(data.getFullYear()<today.getFullYear())return -1

  if(data.getMonth()>today.getMonth())return 1
  else if(data.getMonth()<today.getMonth())return -1

  if(data.getDate()>today.getDate())return 1
  else if(data.getDate()<today.getDate())return -1

  return 0
}

export function date_difference(dateA:(string | Date), dateB?:(string|Date)) : //return dateA - dateB ou false
  {year : number, month : number, day: number} | boolean{
  let dataA : Date, dataB : Date

  if(typeof dateA==='string')dataA = new Date(dateA+'T00:00:00')
  else dataA = dateA

  if(typeof dateB==='string') dataB = new Date(dateB+'T00:00:00')
  else if(typeof dateB==='undefined') dataB = new Date()
  else dataB = dateB

  if(!dataA.getFullYear() || !dataB.getFullYear())return false

  return {
    year : dataA.getFullYear() - dataB.getFullYear(),
    month : dataA.getMonth() - dataB.getMonth(),
    day : dataA.getDate() - dataB.getDate()
  }
}