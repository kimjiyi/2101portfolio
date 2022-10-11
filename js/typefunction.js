// new TypeIt(".intro-txtbig", {
// strings: ["반갑습니다:)","웹퍼블리셔 김지이입니다"],
// speed: 100,
// }).go();



new TypeIt(".typing", {
  speed: 50,
  waitUntilVisible: true,
  loop: false
})

new TypeIt(".typing", {
  speed: 50,
  waitUntilVisible: true,
  loop: false
})
.type("반갑습니다:)")
.break({ delay: 500 })
.type("<strong>웹퍼블리셔김지이<strong>")
.pause(100) 
.type("입니다")
.pause(100) 
.go(); 






// go 시작 / String (,)콤마 줄바꿈