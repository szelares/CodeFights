function makeArrayConsecutive2(statues) { 
  statues.sort((a,b)=>{ 
  return a-b
  });
 var addStat = 0;
  for(var i = statues.length-1; i >= 1; i--){
   addStat = statues[i]-statues[i-1] > 1 ? addStat + (statues[i]-statues[i-1])-1 : addStat; 
   } return addStat;
}
