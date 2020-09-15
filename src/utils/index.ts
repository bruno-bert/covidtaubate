export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  export function formatDate  (stringDate: string) {
    try{
      let date = new Date(stringDate);
      let dd = date.getDate();
      let mm = date.getMonth()+1; 
      let yyyy = date.getFullYear();
      let strdd = (dd<10) ? '0'+dd : dd;
      let strmm = (mm<10) ? '0'+mm : mm;
      return strdd+'/'+strmm+'/'+yyyy;
      
    }catch (e){
      console.log('error on trying to convert date: ', e);
      return ""
    }

  }