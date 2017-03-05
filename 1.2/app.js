// 1
for (var i = 0; i < 10; i++) {
  setTimeout(
    function(i){
      console.log(i);
    }.bind(null, i),
    1000
  );
}


// 2
for (var i = 0; i < 10; i++) {
  (function(i){
    setTimeout(
      function(){
        console.log(i);
      },
      1000
    )
  })(i)
}
