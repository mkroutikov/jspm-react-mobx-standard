function decorator () { }

@decorator
class X {
  constructor() {
    console.log('created instance of class X')
  }

  get blah() {
    return 'blah'
  }
}

const x = new X()

export default x
