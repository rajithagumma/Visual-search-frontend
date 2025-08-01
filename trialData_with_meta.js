const trialData = [
{
  slide: 1,
  present: true,
  count: 5,
  items: [
    { type: "target", x: 100, y: 100 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: -100, y: 0 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 2,
  present: true,
  count: 5,
  items: [
    { type: "target", x: 50, y: 50 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -100, y: 50 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 3,
  present: true,
  count: 5,
  items: [
    { type: "target", x: 100, y: -50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: -50, y: 100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 4,
  present: true,
  count: 5,
  items: [
    { type: "target", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 0, y: -100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 5,
  present: true,
  count: 5,
  items: [
    { type: "target", x: -100, y: 100 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor2", x: -50, y: 0 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 6,
  present: true,
  count: 5,
  items: [
    { type: "target", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor2", x: -100, y: 50 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 7,
  present: true,
  count: 5,
  items: [
    { type: "target", x: 0, y: -100 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: -50, y: -100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 8,
  present: false,
  count: 5,
  items: [
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 100, y: 50 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 9,
  present: false,
  count: 5,
  items: [
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: -50, y: -50 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 10,
  present: false,
  count: 5,
  items: [
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -50, y: 100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 11,
  present: false,
  count: 5,
  items: [
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: -50, y: 100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 12,
  present: false,
  count: 5,
  items: [
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 50, y: 50 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 13,
  present: false,
  count: 5,
  items: [
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: -50, y: -100 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 14,
  present: false,
  count: 5,
  items: [
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: 50, y: 0 },
    ...Array(15).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 15,
  present: true,
  count: 10,
  items: [
    { type: "target", x: -100, y: 100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor1", x: 0, y: 50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 16,
  present: true,
  count: 10,
  items: [
    { type: "target", x: 100, y: 50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 17,
  present: true,
  count: 10,
  items: [
    { type: "target", x: 100, y: -50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor2", x: 100, y: 50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 18,
  present: true,
  count: 10,
  items: [
    { type: "target", x: 50, y: 0 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: 100, y: -100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 19,
  present: true,
  count: 10,
  items: [
    { type: "target", x: -50, y: 0 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor2", x: 50, y: -50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 20,
  present: true,
  count: 10,
  items: [
    { type: "target", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: -100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 21,
  present: true,
  count: 10,
  items: [
    { type: "target", x: 0, y: -100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 22,
  present: false,
  count: 10,
  items: [
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor1", x: -50, y: -100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 23,
  present: false,
  count: 10,
  items: [
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: -50, y: 50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 24,
  present: false,
  count: 10,
  items: [
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor1", x: 50, y: 0 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 25,
  present: false,
  count: 10,
  items: [
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: -100, y: -50 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 26,
  present: false,
  count: 10,
  items: [
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor1", x: 0, y: -100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 27,
  present: false,
  count: 10,
  items: [
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor2", x: -50, y: -100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 28,
  present: false,
  count: 10,
  items: [
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    ...Array(10).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 29,
  present: true,
  count: 15,
  items: [
    { type: "target", x: 0, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: 0 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 30,
  present: true,
  count: 15,
  items: [
    { type: "target", x: 100, y: -100 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 100, y: 100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 31,
  present: true,
  count: 15,
  items: [
    { type: "target", x: -100, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: -100, y: 50 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 32,
  present: true,
  count: 15,
  items: [
    { type: "target", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: -100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 33,
  present: true,
  count: 15,
  items: [
    { type: "target", x: 100, y: 100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: -100, y: 100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 34,
  present: true,
  count: 15,
  items: [
    { type: "target", x: -100, y: -100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor1", x: 100, y: 0 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 35,
  present: true,
  count: 15,
  items: [
    { type: "target", x: 50, y: 50 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: 100, y: -50 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 36,
  present: false,
  count: 15,
  items: [
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: -100, y: 0 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 37,
  present: false,
  count: 15,
  items: [
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: -50, y: 0 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 38,
  present: false,
  count: 15,
  items: [
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: -50, y: -100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 39,
  present: false,
  count: 15,
  items: [
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: 100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 40,
  present: false,
  count: 15,
  items: [
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: -50 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 41,
  present: false,
  count: 15,
  items: [
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: 100, y: 50 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 42,
  present: false,
  count: 15,
  items: [
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: -100, y: -100 },
    ...Array(5).fill({ type: "empty", x: 250, y: 250 })
  ]
},
{
  slide: 43,
  present: true,
  count: 20,
  items: [
    { type: "target", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 0, y: -50 }
  ]
},
{
  slide: 44,
  present: true,
  count: 20,
  items: [
    { type: "target", x: 0, y: 50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor1", x: -50, y: 0 }
  ]
},
{
  slide: 45,
  present: true,
  count: 20,
  items: [
    { type: "target", x: -50, y: 50 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor2", x: 100, y: 50 }
  ]
},
{
  slide: 46,
  present: true,
  count: 20,
  items: [
    { type: "target", x: 100, y: -50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor1", x: -100, y: -100 }
  ]
},
{
  slide: 47,
  present: true,
  count: 20,
  items: [
    { type: "target", x: 0, y: 50 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: 100, y: 50 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: -50, y: -50 }
  ]
},
{
  slide: 48,
  present: true,
  count: 20,
  items: [
    { type: "target", x: -100, y: 50 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor2", x: 100, y: 50 }
  ]
},
{
  slide: 49,
  present: true,
  count: 20,
  items: [
    { type: "target", x: 50, y: -50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: 100, y: -50 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: 0, y: -100 }
  ]
},
{
  slide: 50,
  present: false,
  count: 20,
  items: [
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor1", x: 50, y: -100 }
  ]
},
{
  slide: 51,
  present: false,
  count: 20,
  items: [
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: 50, y: -100 }
  ]
},
{
  slide: 52,
  present: false,
  count: 20,
  items: [
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor1", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor2", x: 0, y: 50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor1", x: 50, y: 100 }
  ]
},
{
  slide: 53,
  present: false,
  count: 20,
  items: [
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: 100, y: 0 },
    { type: "distractor1", x: -100, y: -100 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor1", x: -50, y: 100 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: -50, y: 50 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor1", x: -100, y: 100 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -50, y: 0 }
  ]
},
{
  slide: 54,
  present: false,
  count: 20,
  items: [
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor2", x: -100, y: 100 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: 0, y: 100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 50, y: 0 },
    { type: "distractor2", x: -100, y: -100 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor2", x: 0, y: -100 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor1", x: 50, y: -50 },
    { type: "distractor1", x: -100, y: 50 },
    { type: "distractor2", x: 100, y: -100 },
    { type: "distractor1", x: 100, y: 100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor1", x: -50, y: 0 }
  ]
},
{
  slide: 55,
  present: false,
  count: 20,
  items: [
    { type: "distractor2", x: -50, y: -100 },
    { type: "distractor2", x: -50, y: -50 },
    { type: "distractor2", x: 50, y: 50 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: 0 },
    { type: "distractor2", x: -50, y: 0 },
    { type: "distractor2", x: 0, y: -50 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 50, y: -100 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: 100, y: -50 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor1", x: 50, y: 100 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor2", x: 100, y: 50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor2", x: -100, y: -50 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor2", x: -100, y: 100 }
  ]
},
{
  slide: 56,
  present: false,
  count: 20,
  items: [
    { type: "distractor1", x: -50, y: 0 },
    { type: "distractor2", x: -50, y: 100 },
    { type: "distractor2", x: 100, y: 100 },
    { type: "distractor1", x: 50, y: 50 },
    { type: "distractor2", x: -100, y: 0 },
    { type: "distractor1", x: 100, y: 0 },
    { type: "distractor1", x: -100, y: -50 },
    { type: "distractor1", x: -50, y: 50 },
    { type: "distractor2", x: 50, y: 100 },
    { type: "distractor1", x: 0, y: 50 },
    { type: "distractor2", x: 0, y: 100 },
    { type: "distractor1", x: 0, y: -50 },
    { type: "distractor1", x: -50, y: -100 },
    { type: "distractor2", x: 50, y: -50 },
    { type: "distractor1", x: 0, y: -100 },
    { type: "distractor1", x: -50, y: -50 },
    { type: "distractor1", x: 100, y: -100 },
    { type: "distractor1", x: 50, y: -100 },
    { type: "distractor2", x: -100, y: 50 },
    { type: "distractor2", x: -100, y: -100 }
  ]
}
];