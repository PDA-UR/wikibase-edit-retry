require('should')
const wdEdit = require('..')
const config = {
  username: 'bla',
  password: 'bla'
}

describe('general', () => {
  it('should be a function', (done) => {
    wdEdit.should.be.a.Function()
    done()
  })
  it('should throw if not passed a username', (done) => {
    (() => wdEdit({ password: 'bla' })).should.throw()
    done()
  })
  it('should throw if not passed a password', (done) => {
    (() => wdEdit({ username: 'bla' })).should.throw()
    done()
  })
  it('should return an object', (done) => {
    wdEdit(config).should.be.an.Object()
    done()
  })
  it('should have claim functions', (done) => {
    wdEdit(config).claim.should.be.a.Object()
    wdEdit(config).claim.exists.should.be.a.Function()
    done()
  })
})
