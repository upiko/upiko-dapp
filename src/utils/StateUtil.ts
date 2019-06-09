
export function resultToArray<T>(jsonResult:any):Array<T>{
  let resultArray: Array<T> = [];
  for (let i in jsonResult){
    resultArray.push(jsonResult[i]);
  }  
  return resultArray;
}

