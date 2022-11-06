int main()
{
  int i;
  for ( i = 1; i <= 10; i++ ) {
    sum += i;
    if ( i == 10 ) {
      break;
    }
  } 
  for ( i = 1; i <= 10; i++ ) {
    for ( i = 1; i <= 10; i++ ) {
        sum += i;
        if ( i == 10 ) {
          break;
        }
    } 
  }
  if(i==2){
    for ( i = 1; i <= 10; i++ ) {
        sum += i;
        if ( i == 10 ) {
          break;
        }
    } 
  }
  while(1){
    for ( i = 1; i <= 10; i++ ) {
        sum += i;
        if ( i == 10 ) {
          break;
        }
    } 
  }
  printf("hello word");
}