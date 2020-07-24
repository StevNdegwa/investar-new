//This utility function is used to find a range of numbers

export default function range(start, stop, step){
  let result = [];
  
  for(let i = start;i <= stop;){
    i += step;
    result.push(i);
  }
  
  return result;
}