

setcpm(98/4)

const groove = stack(
  s("hh*16").gain(0.6),
  s("bd sd bd sd")
)

const var74 = stack(
  s("hh hh hh hh hh hh hh hh hh ~ hh ~ hh hh hh hh").gain(0.6),
  s("bd sd bd sd")
)

const par   = note("g#5 c#5 e5 g#5@2 c#5 e5 c#5 g#5 c#5 e5 c#5 g#5 c#5 f#5 b4")
const impar = note("g#5 b4 e5 g#5@2 b4 e5 b4 g#5 b4 e5 b4 g#5 b4 e5 f#5")

const a = note("e3!4 ~@7 e3@3 f#3@2")                    
const b = note("~@3 c#3@3 c#3@2 ~@3 c#3@3 b2@2")         
const c = note("~@3 c#3@3 c#3@2 c#3@3 <b3 b4 b5>@3 b2@2")        
const d = note("~ e3!3 ~@7 e3@3 f#3@2")                  
const e = note("~@3 c#3@3 c#3@2 c#3@3 <b3 b4 b5>@3 b2@2")        

const trans_1 = note("g#3@3 f#3 c#4 g#3 b3@4 f#3@2 g#3 c#4@2 b3")
const trans_2 = note("b4@2 f#4@2 g#4@3 c#5 b4@4 f#4 g#4 c#5 b4")
const trans_3 = note("~@2 f#4@3 g#4@3 c#5@4 b4@4")
const trans_4 = note("g#4 f#4 c#5 g#4 ~@2 b4@2 ~ g#4 f#4@2 c#4@2 e4@2")

const hits = s("akailinn_oh!6 ht!2 mt!2 lt!2").fast(1.2)

const trans = cat(trans_1, trans_2, trans_3, trans_4)
  .s("supersaw")
  .attack(0.01).decay(0.2).sustain(0.5).release(0.1)
  .gain(1.5)

$: arrange(    
  [4, trans]    
)

$: cat(par, impar).s("gm_marimba")
$: arrange([1, groove], [1, var74], [1, groove])
// $: cat(trans_1, trans_2, trans_3, trans_4).s("supersaw").attack(0.01).decay(0.2).sustain(0.5).release(0.1).gain(1.5)

// $: cat(a, b, a, c).s("supersaw").attack(0.01).decay(0.2).sustain(0.5).release(0.1).gain(1.5)
// $: cat(a, b, a, e).s("supersaw").attack(0.01).decay(0.2).sustain(0.5).release(0.1).gain(1.5)
