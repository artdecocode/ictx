import { equal } from 'zoroaster/assert'
import Context from '../context'
import ictx from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof ictx, 'function')
  },
  async 'calls package without error'() {
    await ictx()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
