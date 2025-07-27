var cursor1 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

cursor1to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
cursor1to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
cursor1to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
cursor1to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
cursor1to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var cursor2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

cursor2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
cursor2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

cursor2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
cursor2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

cursor2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
cursor2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
