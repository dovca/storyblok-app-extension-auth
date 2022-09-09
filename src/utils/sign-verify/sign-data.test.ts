import {signData} from "./sign-data";
import {verifyData} from "./verify-data";

const testSecret = 'fkxAHP5whEOjjJh4SFvYvQ9BiqBc8DMqQiX4MMFOcSUx5Qh5xxOI2wqQMRfK53aTOyc5RyEimYQBsA7lWu9kag=='
const testCookieValue = {
  "propA": 123,
  "propB": "abc",
  "propC": {
    "propC1": [1, 2, 3, "a", "b", "c"],
    "propC2": null
  }
}

const sign = signData(testSecret)
const verify = verifyData(testSecret)

describe('signData', () => {
  it('should be the inverse of verifyData', () => {
    expect(testCookieValue).toEqual(verify(sign(testCookieValue)))
  })
})